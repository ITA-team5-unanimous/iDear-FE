'use client';
import {useState} from 'react';
import {GlobalSearchBar} from '@/components/common/search/GlobalSearchBar';
import {PopularContestList} from '@/components/contest/PopularContestList';
import {SortDropdownContainer} from '@/components/dropdown/SortDropdownContainer';
import {SaveButton} from '@/components/buttons/SaveButton';
import {ContestCard} from '@/components/contest/ContestCard';
import {mockContestCard} from '@/mocks/data/mockContestCard';
import {UpFloatingButton} from '@/components/buttons/UpFloatingButton';

export default function ContestMainPage() {
  const contests = mockContestCard;
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleSearchClick = (keyword: string) => {
    console.log('검색어:', keyword);
  };

  const handleSaveClick = () => setIsSaved((prev) => !prev);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='relative mb-20 flex flex-col items-center'>
      <div className='mt-9 flex'>
        <GlobalSearchBar
          onSearch={handleSearchClick}
          placeholder='다양한 공모전을 검색해보세요!'
        />
      </div>

      <div className='border-primary mt-9 flex h-auto w-full max-w-[1400px] flex-col rounded-[4px] border-2 p-12'>
        <div className='flex flex-row items-baseline'>
          <p className='text-2xl leading-normal font-extrabold text-black'>
            인기 공모전
          </p>
          <p className='mt-1 ml-6 text-xl leading-normal font-medium text-black'>
            현재 가장 인기있는 공모전을 알려드릴게요!
          </p>
        </div>

        <div className='mt-8 flex'>
          <PopularContestList />
        </div>
      </div>

      <div className='flex w-full max-w-[1400px] flex-row justify-start pt-9'>
        <SortDropdownContainer />

        <div className='ml-5.5'>
          <SaveButton isOpen={isSaved} onClick={handleSaveClick} />
        </div>
      </div>

      <div className='mt-9 w-full max-w-[1400px]'>
        <div className='grid grid-cols-2 gap-x-[40px] gap-y-9'>
          {contests.map((contest) => (
            <ContestCard key={contest.id} {...contest} />
          ))}
        </div>
      </div>

      <div className='absolute right-10 bottom-80 z-50'>
        <UpFloatingButton onClick={handleScrollToTop} />
      </div>
    </div>
  );
}
