'use client';

// 임시 주석 처리
// import {Spinner} from '@/components/common/ui/Spinner';
// import {ROUTES} from '@/constants/routes';
// import {ensurePublicKey, reissueToken} from '@/services/api/auth/authApi';
// import {useRouter, useSearchParams} from 'next/navigation';
// import {useEffect} from 'react';

export default function OAuth2SuccessPage() {
  // const router = useRouter();
  // const params = useSearchParams();
  // const refresh = params.get('refresh');

  // useEffect(() => {
  //   if (!refresh) return;

  //   (async () => {
  //     try {
  //       await reissueToken(refresh);
  //       await ensurePublicKey();
  //       router.replace(ROUTES.COMPLETE);
  //     } catch {
  //       alert('로그인에 실패했습니다. 다시 시도해 주세요.');
  //       router.replace(ROUTES.AUTH);
  //     }
  //   })();
  // }, [refresh, router]);

  // return <Spinner />;
  return <></>;
}
