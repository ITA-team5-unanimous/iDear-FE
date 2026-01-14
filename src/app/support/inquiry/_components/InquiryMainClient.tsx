'use client';

import {InquiryList} from '@/app/support/inquiry/_components/InquiryList';
import {NoInquiryResult} from '@/app/support/inquiry/_components/NoInquiryResult';
import {BackButton} from '@/components/buttons/BackButton';
import {GlobalPagination} from '@/components/common/pagination/GlobalPagination';
import {useInquiryList} from '@/hooks/queries/useInquiry';
import {Spinner} from '@/components/common/ui/Spinner';

const ITEMS_PER_PAGE = 5;

interface InquiryMainClientProps {
  currentPage: number;
}

export const InquiryMainClient = ({currentPage}: InquiryMainClientProps) => {
  const {data: inquiries, isLoading} = useInquiryList();

  if (isLoading) {
    return <Spinner />;
  }

  const hasInquiries = (inquiries?.length ?? 0) > 0;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = inquiries?.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className='relative flex flex-col items-center pt-36 pb-30'>
      <BackButton />
      <h1 className='text-4xl font-medium'>나의 문의 내역</h1>

      <div className='border-gray mt-15 rounded-lg border p-12'>
        {hasInquiries ? (
          <>
            <InquiryList inquiries={currentItems ?? []} />
            <GlobalPagination
              totalItems={inquiries?.length ?? 0}
              itemsPerPage={ITEMS_PER_PAGE}
              currentPage={currentPage}
            />
          </>
        ) : (
          <NoInquiryResult />
        )}
      </div>
    </div>
  );
};
