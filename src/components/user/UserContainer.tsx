'use client';

import {LogoutCompleteModal} from '@/components/common/modal/LogoutCompleteModal';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {UserItem} from '@/components/user/UserItem';
import {USER_OPTIONS} from '@/constants/gnb-option';
import {ROUTES} from '@/constants/routes';
import {clearAuthCookies} from '@/utils/auth/cookies';
import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/navigation';
import {useState} from 'react';

export const UserContainer = () => {
  const router = useRouter();

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false);

  const handleClick = (item: string) => {
    if (item === '나의 계정') {
      router.push(ROUTES.MYPAGE);
    } else if (item === '고객센터') {
      router.push(ROUTES.SUPPORT);
    } else if (item === '로그아웃') {
      clearAuthCookies();
      setIsLogoutModalOpen(true);
    }
  };

  return (
    <AnimatePresence>
      <>
        <motion.div
          key='user-menu'
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -10}}
          transition={{duration: 0.2}}
          className='flex flex-col shadow-md'>
          {USER_OPTIONS.map((item) => (
            <UserItem
              key={item}
              text={item}
              onClick={() => handleClick(item)}
            />
          ))}
        </motion.div>

        {isLogoutModalOpen && (
          <ModalWrapper isOpen={isLogoutModalOpen}>
            <LogoutCompleteModal />
          </ModalWrapper>
        )}
      </>
    </AnimatePresence>
  );
};
