import {DayBadge} from '@/components/badge/DayBadge';
import {ContestDetailType} from '@/schemas/contests';
import {formatKoreanDate} from '@/utils/formatKoreanDate';
import Image from 'next/image';
import Share from '@/assets/contest/share.svg';
import LikeIcon from '@/assets/contest/like-icon.svg';
import FilledLikeIcon from '@/assets/contest/filled-like.svg';
import DefaultImage from '@/assets/default/default-contest-card.svg';
import GlobalButton from '@/components/buttons/GlobalButton';

interface ContestDetailMetaProps {
  contest: ContestDetailType;
  onToggleBookmark: () => void;
  onShare: () => void;
  onGoSite: () => void;
  onRegister: () => void;
}

export const ContestDetailMeta = ({
  contest,
  onToggleBookmark,
  onShare,
  onGoSite,
  onRegister,
}: ContestDetailMetaProps) => {
  return (
    <div className='border-b-primary relative flex w-full flex-row gap-[90px] border-b py-6'>
      {contest.imageUrl ? (
        <Image
          src={contest.imageUrl}
          alt={contest.title}
          width={430}
          height={519}
          className='rounded-sm object-cover'
        />
      ) : (
        <DefaultImage className='h-[519px] w-[430px] rounded-sm' />
      )}
      <section className='flex w-full flex-col justify-center gap-9'>
        <div className='absolute top-15 right-9 flex flex-row items-center gap-6'>
          <button onClick={onShare} aria-label='공유 버튼'>
            <Share />
          </button>
          <button onClick={onToggleBookmark} aria-label='좋아요 버튼'>
            {contest.bookmarked ? <FilledLikeIcon /> : <LikeIcon />}
          </button>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl font-bold'>접수 기간</h2>
          <div className='flex flex-row items-center gap-[75px]'>
            <DayBadge date={contest.dday} />
            <h3 className='text-xl font-normal'>
              {formatKoreanDate(contest.startDate)} ~
              {formatKoreanDate(contest.deadline)}
            </h3>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl font-bold'>공모분야</h2>
          <p className='text-xl font-normal'>{contest.category}</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl font-bold'>기관/시상</h2>
          <div className='flex flex-row gap-[138px] text-xl font-normal'>
            <p>주최</p>
            <p>{contest.host}</p>
          </div>
          <div className='flex flex-row gap-[120px] text-xl font-normal'>
            <p>시상규모</p>
            <p>{contest.reward}</p>
          </div>
        </div>
        <div className='flex flex-row gap-6'>
          <GlobalButton text='웹사이트 보러가기' onClick={onGoSite} />
          <GlobalButton text='아이디어 등록하기' onClick={onRegister} />
        </div>
      </section>
    </div>
  );
};
