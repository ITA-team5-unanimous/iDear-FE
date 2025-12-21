import {IdeaList} from '@/components/idea/IdeaList';
import {mockIdeaDetail} from '@/mocks/data/mockIdeaData';
import {GlobalPagination} from '@/components/common/pagination/GlobalPagination';
import {GlobalSearchBar} from '@/components/common/search/GlobalSearchBar';
import {BackButton} from '@/components/buttons/BackButton';

type SearchParamsPromise = Promise<{page?: string}>;
const ITEMS_PER_PAGE = 8;

export default async function IdeaPage({
  searchParams,
}: {
  searchParams: SearchParamsPromise;
}) {
  const awaitedSearchParams = await searchParams;
  const currentPage = Number(awaitedSearchParams.page ?? 1);

  // const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // const currentItems = mockIdeaDetail
  //   .slice(startIndex, startIndex + ITEMS_PER_PAGE)
  //   .map((detail) => detail.idea); // idea만 전달

  return (
    <div className='flex flex-col items-center py-9'>
      <header className='mb-[64px]'>
        <BackButton />
        <GlobalSearchBar placeholder='내가 등록한 아이디어를 검색해 보세요!' />
      </header>
      <IdeaList ideas={[mockIdeaDetail.idea]} totalItems={1} />
      <GlobalPagination
        totalItems={1}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
      />
    </div>
  );
}
