import type Contest from '@/types/Contest';
import Image from 'next/image';
import defaultContestCard from '@/assets/main/default-contest-card.svg?url';
type PopularContestProps = Pick<Contest, 'name' | 'image'>;

export default function PopularContest({name, image}: PopularContestProps) {
  const imageSource = image || defaultContestCard;

  return (
    <div className='flex cursor-pointer flex-col'>
      <Image
        src={imageSource}
        alt={name}
        width={210}
        height={270}
        className='h-[270px] w-full rounded-sm'
      />
      <p className='mt-3 line-clamp-2 max-h-[48px] max-w-[210px] text-xl leading-none font-medium text-[#1A1A1A]'>
        {name}
      </p>
    </div>
  );
}
