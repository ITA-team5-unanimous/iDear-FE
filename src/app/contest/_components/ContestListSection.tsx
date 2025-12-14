import {ContestCard} from '@/app/contest/_components/ContestCard';
import {ContestCardSkeleton} from '@/app/contest/_components/skeletons/ContestCardSkeleton';
import {ContestCardType} from '@/schemas/contests';
import {InfiniteData} from '@tanstack/react-query';

interface ContestListSectionProps {
  data?: InfiniteData<{
    content: ContestCardType[];
  }>;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  loadMoreRef: React.RefObject<HTMLDivElement | null>;
}

export const ContestListSection = ({
  data,
  isLoading,
  isFetchingNextPage,
  loadMoreRef,
}: ContestListSectionProps) => {
  return (
    <div className='mt-9 w-full max-w-[1400px]'>
      <div className='grid grid-cols-2 gap-x-[40px] gap-y-9'>
        {isLoading
          ? Array.from({length: 10}).map((_, idx) => (
              <ContestCardSkeleton key={idx} />
            ))
          : data?.pages
              .flatMap((page) => page.content)
              .map((contest: ContestCardType) => (
                <ContestCard key={contest.contestId} {...contest} />
              ))}

        {isFetchingNextPage &&
          Array.from({length: 10}).map((_, idx) => (
            <ContestCardSkeleton key={`loading-${idx}`} />
          ))}
      </div>

      <div ref={loadMoreRef} />
    </div>
  );
};
