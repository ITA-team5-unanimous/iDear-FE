'use client';

import {DayBadge} from '@/components/badge/DayBadge';
import DefaultContestCard from '@/assets/default/default-contest-card.svg?url';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import {IdeaItem as IdeaType} from '@/schemas/idea';
import Image from 'next/image';

export const IdeaItem = ({
  ideaId,
  title,
  host,
  dday,
  requestedAt,
  contestImageUrl,
}: IdeaType) => {
  const router = useRouter();

  const handleClickIdeaList = () => {
    router.push(`${ROUTES.IDEA}/${ideaId}`);
  };

  const formattedDate = requestedAt.split('T')[0];

  return (
    <div
      className='border-primary flex w-[1400px] cursor-pointer flex-row items-center gap-[72px] border-b bg-white px-9 py-4'
      onClick={handleClickIdeaList}
      role='button'
      tabIndex={0}>
      <div className='mt-12 mb-[19px] flex w-[1041px] flex-col gap-6'>
        <strong
          title={title}
          className='truncate overflow-hidden text-2xl font-bold whitespace-nowrap'>
          {title}
        </strong>
        <p className='mt-3 text-xl font-medium'>{host}</p>
        {dday !== null && <DayBadge date={dday} />}
        <p className='text-xl font-medium'>등록 날짜 : {formattedDate}</p>
      </div>
      <Image
        src={contestImageUrl || DefaultContestCard}
        alt={title}
        height={270}
        width={215}
      />
    </div>
  );
};
