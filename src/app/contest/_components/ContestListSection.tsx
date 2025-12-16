import {ContestCard} from '@/app/contest/_components/ContestCard';
import {ContestCardSkeleton} from '@/app/contest/_components/skeletons/ContestCardSkeleton';
import {ContestCardType} from '@/schemas/contests';

interface ContestListSectionProps {
  contests: ContestCardType[];
  isLoading: boolean;
  isFetchingNextPage: boolean;
  loadMoreRef: React.RefObject<HTMLDivElement | null>;
}

export const ContestListSection = ({
  contests,
  isLoading,
  isFetchingNextPage,
  loadMoreRef,
}: ContestListSectionProps) => {
  return (
    <div className='mt-9 w-full max-w-[1400px]'>
      <div className='grid grid-cols-2 gap-x-[40px] gap-y-9'>
        {isLoading &&
          Array.from({length: 10}).map((_, idx) => (
            <ContestCardSkeleton key={`init-${idx}`} />
          ))}

        {!isLoading &&
          contests.map((contest) => (
            <ContestCard key={contest.contestId} {...contest} />
          ))}

        {isFetchingNextPage &&
          Array.from({length: 10}).map((_, idx) => (
            <ContestCardSkeleton key={`next-${idx}`} />
          ))}
      </div>

      <div ref={loadMoreRef} className='h-10' />
    </div>
  );
};
