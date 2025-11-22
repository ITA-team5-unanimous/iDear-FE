'use client';

import ChevronLeft from '@/assets/chevrons/chevron-left.svg';
import {useRouter} from 'next/navigation';

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className='absolute top-[55px] left-9'
      onClick={() => router.back()}>
      <ChevronLeft />
    </button>
  );
};
