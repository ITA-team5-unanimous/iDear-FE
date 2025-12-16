import clsx from 'clsx';
import ChevronDownIcon from '@/assets/chevrons/chevron-down-icon.svg';

interface SortDropdownProps {
  isOpen: boolean;
  onClick: () => void;
  currentLabel: string;
}

export const SortDropdown = ({
  isOpen,
  onClick,
  currentLabel,
}: SortDropdownProps) => {
  return (
    <button
      onClick={onClick}
      className='border-primary flex h-[70px] cursor-pointer items-center rounded-sm border-3 pr-7 pl-10'>
      <div className='flex flex-row items-center'>
        <span className='text-2xl font-bold text-black'>{currentLabel}</span>
        <ChevronDownIcon
          alt={isOpen ? '드롭다운 열림' : '드롭다운 닫힘'}
          className={clsx('mt-0.5 ml-4 transition-transform duration-300', {
            'rotate-180': isOpen,
            'rotate-0': !isOpen,
          })}
        />
      </div>
    </button>
  );
};
