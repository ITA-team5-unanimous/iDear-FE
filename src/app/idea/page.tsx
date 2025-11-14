'use client';

import ChevronLeft from '@/assets/chevrons/chevron-left.svg';
import {IdeaList} from '@/components/idea/IdeaList';
import {mockIdeaData} from '@/mocks/data/mockIdeaData';
import {Pagination} from '@/components/idea/Pagination';
import {GlobalSearchBar} from '@/components/Search/GlobalSearchBar';

export default function IdeaPage() {
  const handleIdeaSearch = () => {
    alert('search');
  };

  return (
    <div className='flex flex-col items-center py-9'>
      <header className='mb-[64px]'>
        <button className='absolute top-[143px] left-9'>
          <ChevronLeft />
        </button>

        <GlobalSearchBar
          placeholder='내가 등록한 아이디어를 검색해 보세요!'
          onSearch={handleIdeaSearch}
        />
      </header>

      <IdeaList ideas={mockIdeaData} totalItems={mockIdeaData.length} />
      <Pagination totalItems={mockIdeaData.length} />
    </div>
  );
}
