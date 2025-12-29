'use client';

import ChevronIcon from '@/assets/chevrons/chevron-right.svg';

interface MyPageOptionProps {
  title: string;
  text: string;
  onClick: () => void;
}

export const MyPageOption = ({title, text, onClick}: MyPageOptionProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <span className='text-2xl font-bold'>{title}</span>

      <button
        className='border-primary flex h-[65px] w-full items-center justify-between rounded-lg border px-6'
        onClick={onClick}>
        <span className='text-xl'>{text}</span>

        <div className='p-[10px]'>
          <ChevronIcon />
        </div>
      </button>
    </div>
  );
};
