'use client';

import {useSearchParams} from 'next/navigation';
import {IdeaList} from '@/app/idea/_components/IdeaList';
import {GlobalPagination} from '@/components/common/pagination/GlobalPagination';
import {GlobalSearchBar} from '@/components/common/search/GlobalSearchBar';
import {BackButton} from '@/components/buttons/BackButton';
import {useIdeaList} from '@/hooks/queries/useIdea';

const ITEMS_PER_PAGE = 8;

export const IdeaMainClient = () => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page') ?? 1);

  const {data: allIdeas} = useIdeaList();

  const totalItems = allIdeas?.length ?? 0;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems =
    allIdeas?.slice(startIndex, startIndex + ITEMS_PER_PAGE) ?? [];

  return (
    <div className='flex flex-col items-center py-9'>
      <header className='mb-[64px]'>
        <BackButton />
        <GlobalSearchBar placeholder='내가 등록한 아이디어를 검색해 보세요!' />
      </header>

      <IdeaList ideas={currentItems} totalItems={totalItems} />

      <GlobalPagination
        totalItems={totalItems}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
      />
    </div>
  );
};
