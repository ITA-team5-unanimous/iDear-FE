'use client';

import {useSearchParams} from 'next/navigation';
import {ContestCard} from '@/components/contest/ContestCard';
import {mockContestCard} from '@/mocks/data/mockContestCard';
import {Contest} from '@/schemas/contests';
import {useMemo} from 'react';
import {GlobalSearchBar} from '@/components/common/search/GlobalSearchBar';
import {NoSearchResult} from '@/components/common/search/NoSearchResult';

export const ContestSearch = () => {
  const searchParams = useSearchParams();
  const rawKeyword = searchParams.get('q') || '';
  const searchKeyword = rawKeyword.toLowerCase();
  const contests: Contest[] = mockContestCard as Contest[];

  // todo: change to real api get
  const filteredContests = useMemo(() => {
    const keywords = searchKeyword.split(/\s+/).filter((k) => k.length > 0);

    if (!searchKeyword) {
      return [];
    }
    return contests.filter((contest) => {
      const titleLower = contest.title.toLowerCase();

      return keywords.every((keyword) => titleLower.includes(keyword));
    });
  }, [searchKeyword, contests]);

  const hasResults = filteredContests.length > 0;

  return (
    <div className='relative mb-20 flex flex-col items-center'>
      <div className='mt-9 flex'>
        <GlobalSearchBar
          placeholder='다양한 공모전을 검색해보세요!'
          initialValue={rawKeyword}
        />
      </div>
      <div className='w-full max-w-[1400px]'>
        {hasResults ? (
          <div className='mt-9 grid grid-cols-2 gap-x-[40px] gap-y-9'>
            {filteredContests.map((contest) => (
              <ContestCard key={contest.id} {...contest} />
            ))}
          </div>
        ) : (
          <NoSearchResult />
        )}
      </div>
    </div>
  );
};
