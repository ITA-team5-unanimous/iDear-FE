import React from 'react';
import ChevronUpIcon from '@/assets/chevrons/chevron-up-white.svg';

interface UpButtonProps {
  onClick?: () => void;
}

export default function UpButton({onClick}: UpButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-label='위로 가기 버튼'
      className='bg-primary flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full transition-transform duration-100 hover:scale-105 active:scale-95'>
      <ChevronUpIcon />
    </button>
  );
}
