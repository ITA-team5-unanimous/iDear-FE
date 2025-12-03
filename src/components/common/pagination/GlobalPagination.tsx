import Link from 'next/link';
import ChevronRight from '@/assets/chevrons/chevron-right.svg';
import clsx from 'clsx';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}

export const GlobalPagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <nav
      className='mt-10 flex items-center justify-center gap-2'
      role='navigation'
      aria-label='페이지네이션'>
      {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`?page=${page}`}
          aria-label={`페이지 ${page}`}
          className={clsx(
            'px-3 py-1 text-2xl',
            currentPage === page ? 'font-bold' : 'font-normal'
          )}>
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link href={`?page=${currentPage + 1}`} className='px-3 py-1'>
          <ChevronRight aria-hidden='true' />
        </Link>
      )}
    </nav>
  );
};
