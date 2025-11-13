import React from 'react';
import SearchIcon from '@/assets/main/search-icon.svg';
import ClearIcon from '@/assets/main/clear-icon.svg';

interface ContestSearchBarProps {
  onSearch: (keyword: string) => void;
}

export default function ContestSearchBar({onSearch}: ContestSearchBarProps) {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value);
    setValue('');
  };

  const handleClear = () => {
    setValue('');
    onSearch('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='border-primary flex h-[70px] w-[857px] items-center rounded-[32px] border-2 px-3'>
      <button
        type='submit'
        aria-label='검색'
        className='mt-0.5 flex items-center justify-center'>
        <SearchIcon alt='검색' width={24} height={24} />
      </button>

      <input
        type='text'
        placeholder='다양한 공모전을 검색해보세요!'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='ml-2 flex-grow bg-transparent text-lg font-medium text-[#1A1A1A] placeholder:text-[#1A1A1A] focus:outline-none'
      />

      <button
        type='button'
        onClick={handleClear}
        aria-label='검색어 삭제'
        className='-mt-1 mr-3 flex cursor-pointer items-center justify-center'>
        <ClearIcon alt='검색어 삭제' width={20} height={20} />
      </button>
    </form>
  );
}
