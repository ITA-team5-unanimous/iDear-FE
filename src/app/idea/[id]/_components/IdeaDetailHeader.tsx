import {BackButton} from '@/components/buttons/BackButton';
import ChevronRight from '@/assets/chevrons/chevron-right.svg';
import {Idea} from '@/schemas/idea';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';

interface IdeaDetailHeaderProps {
  idea: Idea;
}

export const IdeaDetailHeader = ({idea}: IdeaDetailHeaderProps) => {
  const router = useRouter();

  const handleChevronRightClick = () => {
    // TODO: 해당 아이디어의 공모전 상세 페이지로 이동
    router.push(`${ROUTES.CONTEST}/${idea.id}`);
  };

  return (
    <header className='mb-10 flex flex-col gap-[70px]'>
      <div className='flex flex-row'>
        <BackButton />
        <p className='text-[32px] font-bold'>아이디어 기록함</p>
      </div>
      <div className='border-b-primary flex flex-row items-center justify-between border-b pb-4 text-[32px] font-bold'>
        <h1>{idea.title}</h1>
        <button
          type='button'
          onClick={handleChevronRightClick}
          aria-label='공모전 상세 페이지로 이동'>
          <ChevronRight />
        </button>
      </div>
    </header>
  );
};
