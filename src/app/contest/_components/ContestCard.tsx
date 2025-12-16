'use client';

import DefaultContestCard from '@/assets/default/default-contest-card.svg?url';
import Image from 'next/image';
import LikeIcon from '@/assets/contest/like-icon.svg';
import GlobalButton from '@/components/buttons/GlobalButton';
import FilledLikeIcon from '@/assets/contest/filled-like.svg';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import {ContestCardType} from '@/schemas/contests';

export const ContestCard = ({
  contestId,
  title,
  host,
  dday,
  bookmarked,
  imageUrl,
}: ContestCardType) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`${ROUTES.CONTEST}/${contestId}`);
  };

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`${ROUTES.REGISTER}/${contestId}`);
  };

  return (
    <div
      onClick={handleCardClick}
      role='button'
      tabIndex={0}
      className='border-gray flex max-h-[363px] w-[680px] rounded-md border-[1px] p-12 shadow-md'>
      <div className='mr-9 flex-1'>
        <h1 className='h-[83px] max-w-[333px] text-2xl font-bold'>{title}</h1>
        <p className='mt-6 text-xl text-black'>{host}</p>

        <p className='text-blue mt-6 text-xl font-bold'>D-{dday}</p>
        <div className='mt-9 flex'>
          <GlobalButton
            onClick={handleRegisterClick}
            text='아이디어 등록하기'
          />
          <button aria-label='좋아요' className='ml-6'>
            {bookmarked ? <FilledLikeIcon /> : <LikeIcon />}
          </button>
        </div>
      </div>
      <div>
        <Image
          src={imageUrl || DefaultContestCard}
          alt={title}
          height={270}
          width={215}
          className='mt-1 h-[270px] w-full rounded-sm object-cover'
        />
      </div>
    </div>
  );
};
