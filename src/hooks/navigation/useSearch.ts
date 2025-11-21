'use client';

import {useRouter} from 'next/navigation';

export const useSearch = (basePath: string) => {
  const router = useRouter();

  const handleSearchClick = (keyword: string) => {
    if (!keyword || keyword.trim() === '') return;

    router.push(`${basePath}?q=${encodeURIComponent(keyword.trim())}`);
  };

  return handleSearchClick;
};
