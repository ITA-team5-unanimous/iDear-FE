import {API_ENDPOINTS} from '@/services/constant/endpoint';
import {setAuthCookies} from '@/utils/auth/cookies';
import axios from 'axios';

export const reissueToken = async (refresh: string) => {
  const response = await axios.post(`${API_ENDPOINTS.auth.reissue}`, {
    refresh,
  });

  const {access, refresh: newRefresh} = response.data.data;

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  setAuthCookies(access, newRefresh, expires);

  return response.data;
};
