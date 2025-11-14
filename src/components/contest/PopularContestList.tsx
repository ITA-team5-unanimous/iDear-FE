import {mockPopularContestList} from '@/mocks/data/mockPopularContestList';
import {PopularContest} from '@/components/contest/PopularContest';

export default function PopularContestList() {
  const contests = mockPopularContestList;

  return (
    <div className='grid grid-cols-5 gap-x-15'>
      {contests.map((contest) => (
        <PopularContest
          key={contest.id}
          title={contest.title}
          imageUrl={contest.imageUrl}
        />
      ))}
    </div>
  );
}
