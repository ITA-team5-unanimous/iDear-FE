import type Contest from '@/types/Contest';
import defaultContestCard from '@/assets/main/default-contest-card.svg';
import Image from 'next/image';
import LikeIcon from '@/assets/main/like-icon.svg';
import GlobalButton from '@/components/buttons/GlobalButton';

export default function ContestCard({name, organizer, d_day, image}: Contest) {
  const handleLikeClick = () => {
    alert(`${name} 보관함 추가`);
  };
  return (
    <div className='flex max-h-[363px] w-[680px] rounded-md border-[1px] border-gray-400 p-12 shadow-md'>
      <div className='mr-9 flex-1'>
        <h1 className='h-[83px] max-w-[333px] text-2xl font-bold'>{name}</h1>
        <p className='mt-6 text-xl text-black'>{organizer}</p>
        <p className='text-blue mt-6 text-xl font-bold'>D-{d_day}</p>
        <div className='mt-9 flex'>
          <GlobalButton
            onClick={() => alert('아이디어 등록!')}
            text='아이디어 등록하기'
          />
          <button
            aria-label='좋아요'
            onClick={handleLikeClick}
            className='ml-5'>
            <LikeIcon />
          </button>
        </div>
      </div>
      <div>
        <Image
          src={image || defaultContestCard}
          alt={name}
          height={270}
          width={215}
          className='mt-1 h-[270px] w-full rounded-sm object-cover'
        />
      </div>
    </div>
  );
}
