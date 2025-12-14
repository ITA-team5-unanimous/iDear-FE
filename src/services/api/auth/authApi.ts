import {API_ENDPOINTS} from '@/services/constant/endpoint';
import axios from 'axios';

export const reissueToken = async (refresh: string) => {
  const response = await axios.post(`${API_ENDPOINTS.auth.reissue}`, {
    refresh,
  });

  const {access, refresh: newRefresh} = response.data.data;

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  document.cookie = `access_token=${access}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;
  document.cookie = `refresh_token=${newRefresh}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;

  return response.data;
};
