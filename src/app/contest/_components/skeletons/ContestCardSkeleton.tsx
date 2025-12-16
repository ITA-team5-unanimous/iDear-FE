export const ContestCardSkeleton = () => {
  return (
    <div className='flex max-h-[363px] w-[680px] animate-pulse rounded-md border border-gray-200 p-12 shadow-md'>
      <div className='mr-9 flex-1'>
        <div className='mb-6 h-[83px] max-w-[333px] rounded bg-gray-200' />

        <div className='mb-6 h-6 w-1/2 rounded bg-gray-200' />

        <div className='mb-9 h-6 w-1/4 rounded bg-gray-200' />

        <div className='flex gap-6'>
          <div className='h-10 w-40 rounded bg-gray-200' />
          <div className='h-10 w-10 rounded bg-gray-200' />
        </div>
      </div>

      <div className='h-[270px] w-[215px] rounded-sm bg-gray-200' />
    </div>
  );
};
