import {IdeaList} from '@/components/idea/IdeaList';
import {mockIdeaData} from '@/mocks/data/mockIdeaData';
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

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = mockIdeaData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className='flex flex-col items-center py-9'>
      <header className='mb-[64px]'>
        <BackButton />
        <GlobalSearchBar placeholder='내가 등록한 아이디어를 검색해 보세요!' />
      </header>
      <IdeaList ideas={currentItems} totalItems={mockIdeaData.length} />
      <GlobalPagination
        totalItems={mockIdeaData.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
      />
    </div>
  );
}
