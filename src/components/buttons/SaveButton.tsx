import React from 'react';
import HeartIcon from '@/assets/main/filled-like.svg';

interface SaveButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function SaveButton({isOpen, onClick}: SaveButtonProps) {
  return (
    <button
      aria-label='저장함 버튼'
      onClick={onClick}
      className={`flex h-[70px] w-[180px] cursor-pointer items-center justify-center rounded-sm border-3 transition-colors duration-100 ${isOpen ? 'bg-primary border-primary text-white' : 'border-primary bg-white text-black'} `}>
      <div className='flex flex-row items-center'>
        <span className='text-2xl font-bold'>저장함</span>
        <HeartIcon alt='저장함' className='ml-3' />
      </div>
    </button>
  );
}
