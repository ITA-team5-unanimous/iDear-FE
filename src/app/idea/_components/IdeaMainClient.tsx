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

  const {data} = useIdeaList(currentPage - 1);

  const ideas = data?.content ?? [];
  const totalItems = data?.totalElements ?? 0;

  return (
    <div className='flex flex-col py-9'>
      <header className='relative'>
        <BackButton />
      </header>
      <div className='mt-13 mb-[70px] flex w-full items-center justify-center'>
        <GlobalSearchBar placeholder='내가 등록한 아이디어를 검색해 보세요!' />
      </div>
      <div className='flex flex-col items-center'>
        <IdeaList ideas={ideas} totalItems={totalItems} />

        <GlobalPagination
          totalItems={totalItems}
          itemsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
