import {ROUTES} from '@/constants/routes';
import {reissueToken} from '@/services/api/auth/authApi';

import axios from 'axios';

// 토큰 재발급 mutex 처리를 위한 변수, 큐
let isRefreshing = false;
let queue: (() => void)[] = [];

const runQueue = () => {
  queue.forEach((cb) => cb());
  queue = [];
};

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {'Content-Type': 'application/json'},
});

axiosInstance.interceptors.request.use((config) => {
  if (typeof document !== 'undefined') {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token='))
      ?.split('=')[1];

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const status = error.response?.status;
    const code = error.response?.data?.code;
    const originalRequest = error.config;

    // access token 만료 처리
    if (typeof window !== 'undefined' && status === 400 && code === 'A003') {
      if (isRefreshing) {
        return new Promise((resolve) => {
          queue.push(() => resolve(axiosInstance(originalRequest)));
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refresh = document.cookie
          .split('; ')
          .find((row) => row.startsWith('refresh_token='))
          ?.split('=')[1];

        if (!refresh) throw new Error('No refresh token');

        await reissueToken(refresh);

        runQueue();
        return axiosInstance(originalRequest);
      } catch {
        document.cookie = 'access_token=; Max-Age=0; path=/';
        document.cookie = 'refresh_token=; Max-Age=0; path=/';
        window.location.href = ROUTES.AUTH;
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
