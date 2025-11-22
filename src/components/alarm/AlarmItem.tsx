import {ALARM_TEXT} from '@/constants/gnb-option';
import Delete from '@/assets/common/delete.svg';

// 알림 아이템 클릭시 해당 아이디어 기록함으로 이동

interface AlarmItemProps {
  date: string;
  onDelete: () => void;
}

export const AlarmItem = ({date, onDelete}: AlarmItemProps) => {
  return (
    <li className='relative flex flex-col gap-3 rounded-[4px] bg-white p-6'>
      <p>{date}</p>
      <p className='min-h-[66px]'>{ALARM_TEXT}</p>
      <button
        className='absolute top-3 right-3'
        aria-label='알림 삭제 버튼'
        onClick={onDelete}>
        <Delete />
      </button>
    </li>
  );
};
