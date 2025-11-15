import {Contest} from '@/schemas/contests';
import Image from 'next/image';
import DefaultContestCard from '@/assets/default/default-contest-card.svg?url';

type PopularContestProps = Pick<Contest, 'title' | 'imageUrl'>;

export const PopularContest = ({title, imageUrl}: PopularContestProps) => {
  const imageSource = imageUrl || DefaultContestCard;

  return (
    <div className='flex cursor-pointer flex-col'>
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
