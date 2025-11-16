import {UserItem} from '@/components/user/UserItem';
import {USER_OPTIONS} from '@/constants/gnb-option';
import {useClickOutside} from '@/hooks/ui/useClickOutside';
import {AnimatePresence, motion} from 'framer-motion';
import {useRef, useState} from 'react';

export const UserContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClick = (item: string) => {
    alert(`${item} 클릭`);
    // 각 메뉴별 로직 처리 가능
  };

  useClickOutside(containerRef, () => setIsOpen(false));
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
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
      )}
    </AnimatePresence>
  );
};
