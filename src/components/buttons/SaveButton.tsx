'use client';

import clsx from 'clsx';
import FilledHeartIcon from '@/assets/contest/filled-like.svg';
import HeartIcon from '@/assets/contest/like-icon.svg';
import {useState} from 'react';

export const SaveButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickButton = () => {
    setIsOpen((prev) => !prev);
  };
  const buttonClasses = clsx(
    'flex h-[70px] w-[180px] cursor-pointer items-center justify-center rounded-sm border-3 transition-colors duration-100',
    {
      'bg-primary border-primary text-white': isOpen,
      'border-primary bg-white text-black': !isOpen,
    }
  );

  return (
    <button
      aria-label={isOpen ? '저장함 닫기' : '저장함 열기'}
      aria-pressed={isOpen}
      onClick={handleClickButton}
      className={buttonClasses}>
      <div className='flex flex-row items-center'>
        <span className='text-2xl font-bold'>저장함</span>
        {isOpen ? (
          <HeartIcon alt='저장됨' className='ml-3' />
        ) : (
          <FilledHeartIcon alt='저장 안 됨' className='ml-3' />
        )}
      </div>
    </button>
  );
};
