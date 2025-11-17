'use client';

import Logo from '@/assets/logo/idear.svg';
import Link from 'next/link';
import Alarm from '@/assets/alarm/alarm.svg';
import User from '@/assets/user/user.svg';
import {ROUTES} from '@/constants/routes';
import React, {useRef, useState} from 'react';
import {AlarmContainer} from '@/components/alarm/AlarmContainer';
import {UserContainer} from '@/components/user/UserContainer';
import {useClickOutside} from '@/hooks/ui/useClickOutside';

export const NavBar = () => {
  const [openMenu, setOpenMenu] = useState<'alarm' | 'user' | null>(null);

  const alarmRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  useClickOutside(alarmRef, () => openMenu === 'alarm' && setOpenMenu(null));
  useClickOutside(userRef, () => openMenu === 'user' && setOpenMenu(null));

  const handleClickAlarm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpenMenu((prev) => (prev === 'alarm' ? null : 'alarm'));
  };

  const handleClickUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setOpenMenu((prev) => (prev === 'user' ? null : 'user'));
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
        <div ref={alarmRef}>
          <button type='button' onClick={handleClickAlarm} aria-label='알림'>
            <Alarm />
          </button>
          {openMenu === 'alarm' && (
            <div className='absolute top-full right-[150px]'>
              <AlarmContainer />
            </div>
          )}
        </div>

        <div ref={userRef}>
          <button
            type='button'
            onClick={handleClickUser}
            aria-label='사용자 메뉴'>
            <User />
          </button>
          {openMenu === 'user' && (
            <div className='absolute top-full right-[150px]'>
              <UserContainer />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
