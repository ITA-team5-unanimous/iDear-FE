import clsx from 'clsx';

interface DropdownOptionProps {
  onClick: () => void;
  label: string;
  isLast: boolean;
}

export const DropdownOption = ({
  label,
  onClick,
  isLast,
}: DropdownOptionProps) => {
  return (
    <button
      aria-label='드롭다운 옵션 버튼'
      onClick={onClick}
      className={clsx(
        'border-primary hover:bg-primary-2 flex h-[70px] w-full cursor-pointer items-center justify-center transition-colors',
        {'border-b-2': !isLast}
      )}>
      <span className='text-2xl font-bold text-black'>{label}</span>
    </button>
  );
};
