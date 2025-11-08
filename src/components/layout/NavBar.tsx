'use client';

import Logo from '@/assets/logo/idear.svg';
import Link from 'next/link';
import Alarm from '@/assets/alarm/alarm.svg';
import User from '@/assets/user/user.svg';
export const NavBar = () => {
  const handleClickAlarm = () => {
    console.log('알람 클릭');
  };
  const handleUserClick = () => {
    console.log('유저 클릭');
  };

  return (
    <header className='border-b-primary sticky top-0 z-50 flex flex-row items-center justify-between border-b-2 bg-white py-[11px] sm:px-5 xl:px-[164px]'>
      <Logo />
      <nav className='flex items-center gap-12'>
        <Link href=''>
          <span className='hover:border-b-primary hover:border-b-2 sm:text-xl md:text-2xl'>
            공모전
          </span>
        </Link>
        <Link href=''>
          <span className='hover:border-b-primary hover:border-b-2 sm:text-xl md:text-2xl'>
            나의 아이디어
          </span>
        </Link>
        <button
          type='button'
          onClick={handleClickAlarm}
          className='cursor-pointer'
          aria-label='알림'>
          <Alarm />
        </button>
        <button
          type='button'
          onClick={handleUserClick}
          className='cursor-pointer'
          aria-label='사용자 메뉴'>
          <User />
        </button>
      </nav>
    </header>
  );
};
