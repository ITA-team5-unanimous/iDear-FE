'use client';

import {useState} from 'react';
import ChevronRight from '@/assets/chevrons/chevron-right.svg';
import clsx from 'clsx';

interface PaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
}

export const Pagination = ({
  totalItems,
  itemsPerPage = 8,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  return (
    <nav
      className='mt-10 flex items-center justify-center gap-2'
      role='navigation'
      aria-label='아이디어 목록'>
      {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          aria-label={`페이지 ${page}`}
          className={clsx(
            'px-3 py-1 text-2xl',
            currentPage === page ? 'font-bold' : 'font-normal'
          )}>
          {page}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label='다음 페이지'
        aria-disabled={currentPage === totalPages}
        className='px-3 py-1'>
        <ChevronRight aria-hidden='true' />
      </button>
    </nav>
  );
};
