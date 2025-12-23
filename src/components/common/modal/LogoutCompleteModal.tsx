'use client';

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';

export const LogoutCompleteModal = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(ROUTES.AUTH);
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className='flex h-[260px] w-[450px] items-center justify-center rounded-[8px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
      {/* FocusTrap용 더미 포커스 타겟 */}
      <button className='sr-only' tabIndex={0} data-auto-focus aria-hidden />

      <div className='flex flex-col items-center text-xl font-medium'>
        <p id='modal-header'>로그아웃 되었습니다.</p>
        <p id='modal-description'>잠시 후 로그인 화면으로 이동합니다.</p>
      </div>
    </div>
  );
};
