'use client';

import {useSearchParams} from 'next/navigation';
import {GlobalSearchBar} from '@/components/common/search/GlobalSearchBar';
import {useContestSearch} from '@/hooks/queries/useContest';
import {ContestCard} from '@/app/contest/_components/ContestCard';
import {NoSearchResult} from '@/components/common/search/NoSearchResult';
import {ContestCardSkeleton} from '@/app/contest/_components/skeletons/ContestCardSkeleton';
import {useInfiniteScroll} from '@/hooks/ui/useInfiniteScroll';

export const ContestSearchClient = () => {
  const searchParams = useSearchParams();
  const rawKeyword = searchParams.get('keyword') || '';

  const {data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading} =
    useContestSearch({keyword: rawKeyword, sortBy: 'latest'});

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
        <GlobalSearchBar
          placeholder='다양한 공모전을 검색해보세요!'
          initialValue={rawKeyword}
        />
      </div>
      <div className='mt-9 w-full max-w-[1400px]'>
        {isLoading ? (
          <div className='grid grid-cols-2 gap-x-[40px] gap-y-9'>
            {Array.from({length: 6}).map((_, idx) => (
              <ContestCardSkeleton key={idx} />
            ))}
          </div>
        ) : contests.length > 0 ? (
          <>
            <div className='grid grid-cols-2 gap-x-[40px] gap-y-9'>
              {contests.map((contest) => (
                <ContestCard key={contest.contestId} {...contest} />
              ))}
            </div>

            {/* 무한스크롤 트리거 */}
            <div ref={loadMoreRef} className='h-10' />
          </>
        ) : (
          <NoSearchResult type='공모전' />
        )}
      </div>
    </div>
  );
};
