'use client';

import Logo from '@/assets/logo/idear.svg';
import Link from 'next/link';
import Alarm from '@/assets/alarm/alarm.svg';
import User from '@/assets/user/user.svg';
import {ROUTES} from '@/constants/routes';
import {useState} from 'react';
import {AlarmContainer} from '@/components/alarm/AlarmContainer';
import {UserContainer} from '@/components/user/UserContainer';

export const NavBar = () => {
  const [isAlarmOpen, setIsAlarmOpen] = useState<boolean>(false);
  const [isUserOpen, setIsUserOpen] = useState<boolean>(false);

  const handleClickAlarm = () => {
    setIsAlarmOpen((prev) => !prev);
  };

  const handleUserClick = () => {
    setIsUserOpen((prev) => !prev);
  };

  return (
    <header className='border-b-primary sticky top-0 z-50 flex flex-row items-center justify-between border-b-2 bg-white py-[11px] sm:px-5 xl:px-[164px]'>
      <Link href={ROUTES.MAIN}>
        <Logo className='cursor-pointer' />
      </Link>
      <nav className='flex items-center gap-12'>
        <Link href={ROUTES.CONTEST}>
          <span className='hover:border-b-primary px-2 py-1 hover:border-b-2 sm:text-xl md:text-2xl'>
            공모전
          </span>
        </Link>
        <Link href={ROUTES.IDEA}>
          <span className='hover:border-b-primary px-2 py-1 hover:border-b-2 sm:text-xl md:text-2xl'>
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
      {isAlarmOpen && (
        <div className='absolute top-full right-[150px]'>
          <AlarmContainer />
        </div>
      )}
      {isUserOpen && (
        <div className='absolute top-full right-[150px]'>
          <UserContainer />
        </div>
      )}
    </header>
  );
};
