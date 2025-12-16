'use client';

import {useState} from 'react';
import {SortDropdown} from '@/app/contest/_components/dropdown/SortDropdown';
import {DropdownOption} from '@/app/contest/_components/dropdown/DropdownOption';
import {SORT_OPTIONS, SortType} from '@/constants/sort-option';
interface SortDropdownContainerProps {
  value: SortType;
  onChange: (value: SortType) => void;
}

export const SortDropdownContainer = ({
  value,
  onChange,
}: SortDropdownContainerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currentOption = SORT_OPTIONS.find((opt) => opt.key === value);
  const currentLabel = currentOption ? currentOption.label : '정렬 선택';

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (key: SortType) => {
    onChange(key);
    setIsOpen(false);
  };

  const menuOptions = SORT_OPTIONS.filter((opt) => opt.key !== value);

  return (
    <div className='relative'>
      <SortDropdown
        isOpen={isOpen}
        onClick={handleToggle}
        currentLabel={currentLabel}
      />

      {isOpen && (
        <div className='border-primary absolute top-full z-50 mt-4 w-full overflow-hidden border-2 bg-white'>
          {menuOptions.map((option, index) => (
            <DropdownOption
              key={option.key}
              label={option.label}
              onClick={() => handleOptionClick(option.key)}
              isLast={index === menuOptions.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};
