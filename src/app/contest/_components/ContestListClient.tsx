'use client';

import {ContestListSection} from '@/app/contest/_components/ContestListSection';
import {SaveButton} from '@/app/contest/_components/SaveButton';
import {UpFloatingButton} from '@/components/buttons/UpFloatingButton';
import {GlobalSearchBar} from '@/components/common/search/GlobalSearchBar';
import {PopularContestList} from '@/app/contest/_components/PopularContestList';
import {SortDropdownContainer} from '@/app/contest/_components/dropdown/SortDropdownContainer';
import {useContestList} from '@/hooks/queries/useContest';
import {useState} from 'react';
import {useInfiniteScroll} from '@/hooks/ui/useInfiniteScroll';
import {useScrollFixed} from '@/hooks/ui/useScrollFixed';

export const ContestListClient = () => {
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'deadline'>(
    'latest'
  );
  const [mode, setMode] = useState<'all' | 'bookmarked'>('all');

  const isUpButtonFixed = useScrollFixed(2610);

  const {data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading} =
    useContestList(mode, sortBy);

  const {items: contests, loadMoreRef} = useInfiniteScroll({
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    selectItems: (page) => page.content,
  });

  return (
    <div className='relative mb-20 flex flex-col items-center'>
      <div className='mt-9 flex'>
        <GlobalSearchBar placeholder='다양한 공모전을 검색해보세요!' />
      </div>

      {/* 인기 공모전 */}
      <div className='border-primary mt-9 flex w-full max-w-[1400px] flex-col rounded-[4px] border-2 p-12'>
        <div className='flex items-baseline'>
          <p className='text-2xl font-extrabold'>인기 공모전</p>
          <p className='ml-6 text-xl font-medium'>
            현재 가장 인기있는 공모전을 알려드릴게요!
          </p>
        </div>

        <div className='mt-8'>
          <PopularContestList />
        </div>
      </div>

      {/* 정렬 / 북마크 */}
      <div className='flex w-full max-w-[1400px] pt-9'>
        <SortDropdownContainer value={sortBy} onChange={setSortBy} />
        <div className='ml-5.5'>
          <SaveButton
            active={mode === 'bookmarked'}
            onClick={() =>
              setMode((prev) => (prev === 'all' ? 'bookmarked' : 'all'))
            }
          />
        </div>
      </div>

      <ContestListSection
        contests={contests}
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        loadMoreRef={loadMoreRef}
      />

      <div
        className={`z-50 transition-all ${
          isUpButtonFixed
            ? 'fixed right-10 bottom-20'
            : 'absolute right-10 bottom-80'
        }`}>
        <UpFloatingButton />
      </div>
    </div>
  );
};
