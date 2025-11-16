import {AlarmItem} from '@/components/alarm/AlarmItem';
import {useClickOutside} from '@/hooks/ui/useClickOutside';
import {mockAlarmData} from '@/mocks/data/mockAlarmData';
import {AnimatePresence, motion} from 'framer-motion';
import {useRef, useState} from 'react';

export const AlarmContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleDelete = () => {
    alert('알림 삭제!');
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
          className='bg-gray flex w-[421px] flex-col gap-6 p-9 shadow-lg'>
          <strong className='text-2xl font-bold text-white'>알림</strong>
          <ul className='scrollable flex max-h-[60vh] flex-col gap-3 overflow-y-auto'>
            {mockAlarmData.map((alarm) => (
              <AlarmItem
                key={alarm.id}
                date={alarm.date}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
