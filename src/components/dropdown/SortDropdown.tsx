import React from 'react';
import ChevronUpIcon from '@/assets/chevrons/chevron-up-icon.svg';
import ChevronDownIcon from '@/assets/chevrons/chevron-down-icon.svg';

interface SortDropdownProps {
  isOpen: boolean;
  onClick: () => void;
  currentLabel: string;
}

export default function SortDropdown({
  isOpen,
  onClick,
  currentLabel,
}: SortDropdownProps) {
  const ChevronIcon = isOpen ? ChevronUpIcon : ChevronDownIcon;

  return (
    <button
      onClick={onClick}
      className='border-primary flex h-[70px] w-[180px] cursor-pointer items-center rounded-sm border-3 pr-7 pl-10'>
      <div className='flex flex-row items-center'>
        <span className='line-clamp-1 max-w-[64px] text-2xl font-bold text-black'>
          {currentLabel}
        </span>
        <ChevronIcon
          alt={isOpen ? '드롭다운 열림' : '드롭다운 닫힘'}
          className='mt-0.5 ml-4'
        />
      </div>
    </button>
  );
}
