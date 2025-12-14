'use client';

import {PopularContest} from '@/app/contest/_components/PopularContest';
import {PopularContestSkeletonList} from '@/app/contest/_components/skeletons/PopularContestSkeleton';
import {usePopularContests} from '@/hooks/queries/useContest';

export const PopularContestList = () => {
  const {data, isLoading, isError} = usePopularContests();

  if (isLoading) {
    return <PopularContestSkeletonList />;
  }

  if (isError) {
    return (
      <p className='text-primary text-center text-sm'>
        인기 공모전을 불러오는 데 실패했습니다.
      </p>
    );
  }
  return (
    <div className='grid grid-cols-5 gap-x-15'>
      {data?.data.map((contest) => (
        <PopularContest
          key={contest.contestId}
          contestId={contest.contestId}
          title={contest.title}
          imageUrl={contest.imageUrl}
        />
      ))}
    </div>
  );
};
