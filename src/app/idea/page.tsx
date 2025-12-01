import {IdeaList} from '@/components/idea/IdeaList';
import {mockIdeaData} from '@/mocks/data/mockIdeaData';
import {Pagination} from '@/components/idea/Pagination';
import {GlobalSearchBar} from '@/components/common/search/GlobalSearchBar';
import {BackButton} from '@/components/buttons/BackButton';

export default function IdeaPage() {
  return (
    <div className='flex flex-col items-center py-9'>
      <header className='mb-[64px]'>
        <BackButton />

        <GlobalSearchBar placeholder='내가 등록한 아이디어를 검색해 보세요!' />
      </header>

      <IdeaList ideas={mockIdeaData} totalItems={mockIdeaData.length} />
      <Pagination totalItems={mockIdeaData.length} />
    </div>
  );
}
