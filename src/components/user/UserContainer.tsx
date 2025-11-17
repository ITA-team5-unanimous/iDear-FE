import {UserItem} from '@/components/user/UserItem';
import {USER_OPTIONS} from '@/constants/gnb-option';

import {AnimatePresence, motion} from 'framer-motion';

export const UserContainer = () => {
  const handleClick = (item: string) => {
    alert(`${item} 클릭`);
    // 각 메뉴별 로직 처리 가능
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
