import {IdeaItem} from '@/app/idea/_components/IdeaItem';
import {IdeaItem as IdeaItemType} from '@/schemas/idea';

interface IdeaListProps {
  ideas: IdeaItemType[];
  totalItems: number;
}

export const IdeaList = ({ideas, totalItems}: IdeaListProps) => {
  return (
    <section className='flex flex-col'>
      <div className='flex flex-row items-center gap-9 pl-9'>
        <h1 className='text-[32px] font-bold'>나의 아이디어</h1>
        <p className='text-xl font-medium'>
          총 {totalItems} 개의 아이디어가 있어요!
        </p>
      </div>
      {ideas.map((idea) => (
        <IdeaItem key={idea.ideaId} {...idea} />
      ))}
    </section>
  );
};
