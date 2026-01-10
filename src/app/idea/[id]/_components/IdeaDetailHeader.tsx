import {BackButton} from '@/components/buttons/BackButton';
import ChevronRight from '@/assets/chevrons/chevron-right.svg';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';

interface IdeaDetailHeaderProps {
  contest: {
    id: number;
    title: string;
  };
}

export const IdeaDetailHeader = ({contest}: IdeaDetailHeaderProps) => {
  const router = useRouter();

  const handleChevronRightClick = () => {
    router.push(`${ROUTES.CONTEST}/${contest.id}`);
  };

  return (
    <header className='mb-10 flex flex-col gap-[70px]'>
      <div className='flex flex-row'>
        <BackButton />
        <p className='text-[32px] font-bold'>아이디어 기록함</p>
      </div>
      <div className='border-b-primary flex flex-row items-center justify-between border-b pb-4 text-[32px] font-bold'>
        <h1>{contest.title}</h1>
        <button
          type='button'
          onClick={handleChevronRightClick}
          aria-label='공모전 상세 페이지로 이동'
          className='p-4'>
          <ChevronRight />
        </button>
      </div>
    </header>
  );
};
