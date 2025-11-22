'use client';

import ChevronLeft from '@/assets/chevrons/chevron-left.svg';
import {useRouter} from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      aria-label='뒤로 가기'
      className='absolute top-[55px] left-9'
      onClick={() => router.back()}>
      <ChevronLeft />
    </button>
  );
};
