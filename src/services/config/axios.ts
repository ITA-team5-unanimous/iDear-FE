import {API_BASE_URL} from '@/services/constant/endpoint';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {'Content-Type': 'application/json'},
});

axiosInstance.interceptors.request.use((config) => {
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('access_token='))
    ?.split('=')[1];

  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);
