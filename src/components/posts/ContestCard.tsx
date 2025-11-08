import type Contest from '@/types/Contest';
import defaultContestCard from '@/assets/main/default-contest-card.svg';
import Image from 'next/image';
import IdeaRegisterButton from '@/components/buttons/IdeaRegisterButton';
import LikeIcon from '@/assets/main/like.svg';

export default function ContestCard({name, organizer, d_day, image}: Contest) {
  const onLikeClick = () => {
    alert(`${name} 보관함 추가`);
  };
  return (
    <div className='flex max-h-[363px] w-[680px] rounded-md border-[1px] border-gray-400 p-12 shadow-md'>
      <div className='mr-9 flex-1'>
        <h1 className='h-[83px] max-w-[333px] text-2xl font-bold'>{name}</h1>
        <p className='mt-6 text-xl text-[#1A1A1A]'>{organizer}</p>
        <p className='mt-6 text-xl font-bold text-[#0062DD]'>D-{d_day}</p>
        <div className='mt-9 flex'>
          <IdeaRegisterButton onClickRegister={() => alert('아이디어 등록!')} />
          <button aria-label='좋아요' className='onClick={onLikeClick} ml-5'>
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
