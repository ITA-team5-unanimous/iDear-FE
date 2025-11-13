import React from 'react';
import {mockPopularContestList} from '@/mocks/data/mockPopularContestList';
import PopularContest from './PopularContest';

export default function PopularContestList() {
  const contests = mockPopularContestList;

  return (
    <div className='grid grid-cols-5 gap-x-15'>
      {contests.map((contest) => (
        <PopularContest
          key={contest.id}
          name={contest.name}
          image={contest.image}
        />
      ))}
    </div>
  );
}
