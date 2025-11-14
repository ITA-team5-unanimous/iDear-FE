'use client';

import {DayBadge} from '@/components/badge/DayBadge';
import DefaultContestCard from '@/assets/default/default-contest-card.svg';

interface IdeaItemProps {
  title: string;
  hostingOrganization: string;
  d_day: number;
  registerDate: string;
}

export const IdeaItem = ({
  title,
  hostingOrganization,
  d_day,
  registerDate,
}: IdeaItemProps) => {
  const handleClickIdeaList = () => {
    alert('아이디어 상세 페이지로 이동!');
  };

  return (
    <div
      className='border-primary flex w-[1400px] cursor-pointer flex-row items-center gap-[72px] border-b bg-white px-9 py-4'
      onClick={handleClickIdeaList}>
      <div className='mt-12 mb-[19px] flex w-[1041px] flex-col gap-6'>
        <strong
          title={title}
          className='truncate overflow-hidden text-2xl font-bold whitespace-nowrap'>
          {title}
        </strong>
        <p className='mt-3 text-xl font-medium'>{hostingOrganization}</p>
        <DayBadge date={d_day} />
        <p className='text-xl font-medium'>등록 날짜 : {registerDate}</p>
      </div>
      <DefaultContestCard />
    </div>
  );
};
