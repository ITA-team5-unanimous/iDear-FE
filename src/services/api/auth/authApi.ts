import {getUsers, postPublicKey} from '@/services/api/user/userApi';
import {API_ENDPOINTS} from '@/services/constant/endpoint';
import {generateKeyPair} from '@/services/crypto/keypair';
import {setAuthCookies} from '@/utils/auth/cookies';
import {loadPrivateKey, savePrivateKey} from '@/utils/indexedDb';
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

export const ensurePublicKey = async () => {
  const user = await getUsers();
  const localPrivateKey = await loadPrivateKey();

  const shouldRegenerate = !user.data.publicKey || !localPrivateKey;

  if (!shouldRegenerate) {
    return;
  }

  // key pair 새로 생성
  const {publicKey, privateKey} = await generateKeyPair();

  // 로컬 privateKey 저장
  await savePrivateKey(privateKey);

  // 서버 publicKey 갱신
  await postPublicKey(publicKey);
};
