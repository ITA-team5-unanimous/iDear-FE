'use client';

import {UserItem} from '@/components/user/UserItem';
import {USER_OPTIONS} from '@/constants/gnb-option';
import {ROUTES} from '@/constants/routes';
import {AnimatePresence, motion} from 'framer-motion';
import {useRouter} from 'next/navigation';

export const UserContainer = () => {
  const router = useRouter();

  const handleClick = (item: string) => {
    if (item === '고객센터') {
      router.push(`${ROUTES.SUPPORT}`);
    }
    // 공지사항, 로그아웃 추후 처리
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
