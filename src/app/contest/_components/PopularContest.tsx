'use client';

import Image from 'next/image';
import DefaultContestCard from '@/assets/default/default-contest-card.svg?url';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import {PopularContestType} from '@/schemas/contests';

export const PopularContest = ({
  contestId,
  title,
  imageUrl,
}: PopularContestType) => {
  const imageSource = imageUrl || DefaultContestCard;
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`${ROUTES.CONTEST}/${contestId}`);
  };

  return (
    <div
      onClick={handleCardClick}
      role='button'
      tabIndex={0}
      className='flex cursor-pointer flex-col'>
      <Image
        src={imageSource}
        alt={title}
        width={210}
        height={270}
        className='h-[270px] w-full rounded-sm'
      />
      <p className='mt-3 line-clamp-2 max-h-[48px] max-w-[210px] text-xl leading-none font-medium text-black'>
        {title}
      </p>
    </div>
  );
};
