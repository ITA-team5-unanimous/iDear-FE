'use client';

import {ROUTES} from '@/constants/routes';
import {reissueToken} from '@/services/api/auth/authApi';
import {useRouter, useSearchParams} from 'next/navigation';
import {useEffect} from 'react';

export const OAuthHandler = () => {
  const router = useRouter();
  const params = useSearchParams();
  const refresh = params.get('refresh');

  useEffect(() => {
    if (!refresh) return;

    (async () => {
      try {
        await reissueToken(refresh);
        router.replace(ROUTES.COMPLETE);
      } catch {
        router.replace(ROUTES.AUTH);
      }
    })();
  }, [refresh, router]);

  return <p className='text-lg'>로그인 처리 중입니다...</p>;
};
