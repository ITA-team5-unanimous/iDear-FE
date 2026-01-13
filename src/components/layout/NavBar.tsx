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
import {NavItem} from '@/components/layout/NavItem';
import {useUserStore} from '@/hooks/stores/useUserStore';
import Image from 'next/image';

export const NavBar = () => {
  const [openMenu, setOpenMenu] = useState<'alarm' | 'user' | null>(null);

  const alarmRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  const profileImageUrl = useUserStore((state) => state.profileImageUrl);

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
        <NavItem href={ROUTES.CONTEST} label='공모전' />
        <NavItem href={ROUTES.IDEA} label='나의 아이디어' />
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
            aria-label='사용자 메뉴'
            className='relative h-15 w-15 overflow-hidden rounded-full'>
            {profileImageUrl ? (
              <Image
                src={profileImageUrl}
                alt='프로필 이미지'
                fill
                className='object-cover'
              />
            ) : (
              <User />
            )}
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
