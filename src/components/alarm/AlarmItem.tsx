import Delete from '@/assets/common/delete.svg';

interface AlarmItemProps {
  date: string;
  onDelete: () => void;
  content: string;
  onClick: () => void;
}

export const AlarmItem = ({
  date,
  onDelete,
  content,
  onClick,
}: AlarmItemProps) => {
  return (
    <li
      className='relative flex cursor-pointer flex-col gap-3 rounded-[4px] bg-white p-6'
      onClick={onClick}>
      <p>{date}</p>
      <p className='min-h-[66px]'>{content}</p>
      <button
        className='absolute top-3 right-3'
        aria-label='알림 삭제 버튼'
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}>
        <Delete />
      </button>
    </li>
  );
};
