'use client';

import {useState} from 'react';
import SearchIcon from '@/assets/search/search-icon.svg';
import ClearIcon from '@/assets/search/clear-icon.svg';
import {usePathname, useRouter} from 'next/navigation';

interface GlobalSearchBarProps {
  placeholder: string;
  initialValue?: string;
}

export const GlobalSearchBar = ({
  placeholder,
  initialValue = '',
}: GlobalSearchBarProps) => {
  const [value, setValue] = useState<string>(initialValue);
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const keyword = value.trim();
    if (!keyword) {
      router.push(pathname);
      return;
    }

    router.push(`${pathname}?keyword=${encodeURIComponent(keyword)}`);
  };

  const handleClear = () => {
    setValue('');
    router.push(pathname);
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
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='hide-placeholder-on-focus ml-2 flex-grow bg-transparent text-lg font-medium text-black placeholder:text-black focus:outline-none'
      />

      <button
        type='button'
        onClick={handleClear}
        aria-label='검색어 삭제'
        className='-mt-1 mr-3 flex items-center justify-center'>
        <ClearIcon alt='검색어 삭제' width={20} height={20} />
      </button>
    </form>
  );
};
