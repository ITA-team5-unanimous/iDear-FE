import NoResultImage from '@/assets/logo/sad-image.svg';

interface NoSearchResultProps {
  type?: string;
}

export const NoSearchResult = ({type}: NoSearchResultProps) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='mt-18'>
        <NoResultImage alt='검색결과 없음' />
      </div>
      <p className='text-2xl font-bold text-black'>
        조건에 맞는 {type}을 찾지 못했어요.
      </p>
      <p className='mt-2 text-xl text-black'>
        검색어를 다시 확인하거나 다른 조건으로 시도해보세요.
      </p>
    </div>
  );
};
