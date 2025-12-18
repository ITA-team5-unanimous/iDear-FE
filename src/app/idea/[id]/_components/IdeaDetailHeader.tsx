import {BackButton} from '@/components/buttons/BackButton';
import ChevronRight from '@/assets/chevrons/chevron-right.svg';
import {Idea} from '@/schemas/idea';

interface IdeaDetailHeaderProps {
  idea: Idea;
}

export const IdeaDetailHeader = ({idea}: IdeaDetailHeaderProps) => {
  return (
    <header className='mb-10 flex flex-col gap-[70px]'>
      <div className='flex flex-row'>
        <BackButton />
        <p className='text-[32px] font-bold'>아이디어 기록함</p>
      </div>
      <div className='border-b-primary flex flex-row items-center justify-between border-b pb-4 text-[32px] font-bold'>
        <h1>{idea.title}</h1>
        <button>
          <ChevronRight />
        </button>
      </div>
    </header>
  );
};
