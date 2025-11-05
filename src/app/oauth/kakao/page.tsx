'use client';

import {useRouter, useSearchParams} from 'next/navigation';
import {useEffect} from 'react';

export default function KakaoRedirectPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const handleKakaoLogin = async () => {
      const code = searchParams.get('code');

      if (code) {
        const serverResponse = ''; // todo

        if (!serverResponse) return;
        // const {data: loginUserInfo, accessToken} = serverResponse;

        // useUserInfo.getState().setUserInfo(loginUserInfo);
      }
    };

    handleKakaoLogin();
  }, [searchParams, router]);

  return <div>kakao redirect</div>;
}
