'use client';

import {useSearchParams} from 'next/navigation';
import {GlobalSearchBar} from '@/components/common/search/GlobalSearchBar';

export const ContestSearch = () => {
  const searchParams = useSearchParams();
  const rawKeyword = searchParams.get('q') || '';

  // todo: change to real api get

  return (
    <div className='relative mb-20 flex flex-col items-center'>
      <div className='mt-9 flex'>
        <GlobalSearchBar
          placeholder='다양한 공모전을 검색해보세요!'
          initialValue={rawKeyword}
        />
      </div>
      <div className='w-full max-w-[1400px]'>
        {/* {hasResults ? (
          <div className='mt-9 grid grid-cols-2 gap-x-[40px] gap-y-9'> */}
        {/* {filteredContests.map((contest) => (
              <ContestCard key={contest.contestId} {...contest} />
            ))} */}
        {/* </div> */}
        {/* ) : (
          <NoSearchResult />
        )} */}
      </div>
    </div>
  );
};
