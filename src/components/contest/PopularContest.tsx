import {z} from 'zod';
import {contestSchema} from '@/schemas/contests';
import Image from 'next/image';
import DefaultContestCard from '@/assets/default/default-contest-card.svg?url';

type Contest = z.infer<typeof contestSchema>;
type PopularContestProps = Pick<Contest, 'title' | 'imageUrl'>;

export default function PopularContest({title, imageUrl}: PopularContestProps) {
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
      <p className='mt-3 line-clamp-2 max-h-[48px] max-w-[210px] text-xl leading-none font-medium text-[#1A1A1A]'>
        {title}
      </p>
    </div>
  );
}
