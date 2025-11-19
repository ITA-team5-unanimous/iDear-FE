'use client';

import Image from 'next/image';
import NoResultImage from '@/assets/search/sad-image.svg?url';
import {useSearchParams} from 'next/navigation';
import {ContestCard} from '@/components/contest/ContestCard';
import {mockContestCard} from '@/mocks/data/mockContestCard';
import {Contest} from '@/schemas/contests';
import {useMemo} from 'react';
import {GlobalSearchBar} from '@/components/common/search/GlobalSearchBar';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import {Suspense} from 'react';

const SearchComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawKeyword = searchParams.get('q') || '';
  const searchKeyword = rawKeyword.toLowerCase();
  const contests: Contest[] = mockContestCard as Contest[];

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

  const handleSearchClick = (keyword: string) => {
    if (keyword.trim()) {
      router.push(
        `${ROUTES.CONTEST_SEARCH}?q=${encodeURIComponent(keyword.trim())}`
      );
    }
  };

  return (
    <div className='relative mb-20 flex flex-col items-center'>
      <div className='mt-9 flex'>
        <GlobalSearchBar
          onSearch={handleSearchClick}
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
          <div className='flex flex-col items-center'>
            <Image src={NoResultImage} alt='검색 결과 없음' className='mt-18' />
            <p className='text-2xl font-bold text-black'>
              조건에 맞는 공모전을 찾지 못했어요.
            </p>
            <p className='mt-2 text-xl text-black'>
              검색어를 다시 확인하거나 다른 조건으로 시도해보세요.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function ContestSearchaResult() {
  return (
    <Suspense fallback={<div>검색 엔진을 준비 중입니다...</div>}>
      <SearchComponent />
    </Suspense>
  );
}
