export const PopularContestSkeletonList = () => (
  <div className='grid grid-cols-5 gap-x-15'>
    {Array.from({length: 5}).map((_, i) => (
      <div key={i} className='flex animate-pulse flex-col gap-3'>
        <div className='h-[270px] w-[210px] rounded bg-gray-200' />
        <div className='h-12 w-[210px] bg-gray-200 not-odd:rounded' />
      </div>
    ))}
  </div>
);
