'use client';

import {UserItem} from '@/components/user/UserItem';
import {USER_OPTIONS} from '@/constants/gnb-option';
import {ROUTES} from '@/constants/routes';
import {clearAuthCookies} from '@/utils/auth/cookies';
import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/navigation';

export const UserContainer = () => {
  const router = useRouter();

  const handleClick = (item: string) => {
    if (item === '고객센터') {
      router.push(ROUTES.SUPPORT);
    } else if (item === '로그아웃') {
      clearAuthCookies();
      // TODO: 로그아웃 모달로 변경?
      alert('로그아웃이 완료되었습니다.');
      router.push(ROUTES.AUTH);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0, y: -10}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -10}}
        transition={{duration: 0.2}}
        className='flex flex-col shadow-md'>
        {USER_OPTIONS.map((item) => (
          <UserItem key={item} text={item} onClick={() => handleClick(item)} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
