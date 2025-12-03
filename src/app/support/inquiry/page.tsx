import {InquiryList} from '@/components/support/inquiry/InquiryList';
import {mockInquiryData} from '@/mocks/data/mockInquiryData';
import {BackButton} from '@/components/buttons/BackButton';
import {NoInquiryResult} from '@/components/support/inquiry/NoInquiryResult';
import {GlobalPagination} from '@/components/common/pagination/GlobalPagination';

type SearchParamsPromise = Promise<{page?: string}>;

export default async function InquiryPage({
  searchParams,
}: {
  searchParams: SearchParamsPromise;
}) {
  const hasInquiries = mockInquiryData.length > 0;
  const itemsPerPage = 5;
  const awaitedSearchParams = await searchParams;
  const currentPage = Number(awaitedSearchParams.page ?? 1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = mockInquiryData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className='relative flex flex-col items-center pt-36 pb-30'>
      <BackButton />
      <h1 className='text-4xl font-medium'>나의 문의 내역</h1>
      <div className='border-gray mt-15 rounded-lg border p-12'>
        {hasInquiries ? (
          <>
            <InquiryList inquirys={currentItems} />
            <GlobalPagination
              totalItems={mockInquiryData.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
            />
          </>
        ) : (
          <NoInquiryResult />
        )}
      </div>
    </div>
  );
}
