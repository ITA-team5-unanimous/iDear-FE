import DefaultContestCard from '@/assets/default/default-contest-card.svg?url';
import Image from 'next/image';
import LikeIcon from '@/assets/main/like-icon.svg';
import GlobalButton from '@/components/buttons/GlobalButton';
import {Contest} from '@/schemas/contests';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';

export const ContestCard = ({
  id,
  title,
  hostingOrganization,
  d_day,
  imageUrl,
}: Contest) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`${ROUTES.CONTEST_DETAIL}`);
    //id 추후에 추가
  };

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`${title} 보관함 추가`);
  };

  return (
    <div
      onClick={handleCardClick}
      role='button'
      tabIndex={0}
      className='border-gray flex max-h-[363px] w-[680px] rounded-md border-[1px] p-12 shadow-md'>
      <div className='mr-9 flex-1'>
        <h1 className='h-[83px] max-w-[333px] text-2xl font-bold'>{title}</h1>
        <p className='mt-6 text-xl text-black'>{hostingOrganization}</p>

        <p className='text-blue mt-6 text-xl font-bold'>D-{d_day}</p>
        <div className='mt-9 flex'>
          <GlobalButton
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              alert('아이디어 등록!');
            }}
            text='아이디어 등록하기'
          />
          <button
            aria-label='좋아요'
            onClick={handleLikeClick}
            className='ml-6'>
            <LikeIcon />
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
