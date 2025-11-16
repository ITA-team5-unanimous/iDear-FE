import {useState} from 'react';
import {SortDropdown} from '@/components/dropdown/SortDropdown';
import {DropdownOption} from '@/components/dropdown/DropdownOption';
import {SORT_OPTIONS} from '@/constants/sort-option';

export const SortDropdownContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedKey, setSelectedKey] = useState<string>('latest');

  const currentOption = SORT_OPTIONS.find((opt) => opt.key === selectedKey);
  const currentLabel = currentOption ? currentOption.label : '정렬 선택';

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (key: string) => {
    setSelectedKey(key);
    setIsOpen(false);
  };

  const menuOptions = SORT_OPTIONS.filter((opt) => opt.key !== selectedKey);

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
