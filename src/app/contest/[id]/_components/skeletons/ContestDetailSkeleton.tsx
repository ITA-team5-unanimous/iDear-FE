export const ContestDetailSkeleton = () => (
  <div className='relative flex w-full animate-pulse flex-col items-center px-40 py-[54px]'>
    <div className='mb-6 h-[40px] w-full rounded bg-gray-200'></div>

    <div className='flex w-full gap-[90px] border-b border-gray-300 pb-6'>
      <div className='h-[519px] w-[430px] rounded-sm bg-gray-200'></div>

      <section className='flex w-full flex-col gap-9'>
        <div className='flex flex-col gap-4'>
          <div className='h-6 w-[150px] rounded bg-gray-200'></div>
          <div className='flex flex-row gap-[75px]'>
            <div className='h-6 w-[50px] rounded bg-gray-200'></div>
            <div className='h-6 w-[120px] rounded bg-gray-200'></div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='h-6 w-[80px] rounded bg-gray-200'></div>
          <div className='flex flex-row gap-[138px]'>
            <div className='h-5 w-[60px] rounded bg-gray-200'></div>
            <div className='h-5 w-[120px] rounded bg-gray-200'></div>
          </div>
          <div className='flex flex-row gap-[138px]'>
            <div className='h-5 w-[60px] rounded bg-gray-200'></div>
            <div className='h-5 w-[120px] rounded bg-gray-200'></div>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='h-6 w-[50px] rounded bg-gray-200'></div>
          <div className='flex flex-row gap-[90px]'>
            <div className='h-5 w-[50px] rounded bg-gray-200'></div>
            <div className='h-5 w-[100px] rounded bg-gray-200'></div>
          </div>
          <div className='flex flex-row gap-[103px]'>
            <div className='h-5 w-[50px] rounded bg-gray-200'></div>
            <div className='h-5 w-[100px] rounded bg-gray-200'></div>
          </div>
        </div>

        <div className='flex flex-row gap-6'>
          <div className='h-10 w-[150px] rounded bg-gray-200'></div>
          <div className='h-10 w-[150px] rounded bg-gray-200'></div>
        </div>
      </section>
    </div>

    <section className='border-gray mt-12 w-full rounded-[8px] border p-9'>
      <div className='h-32 w-full rounded bg-gray-200'></div>
    </section>
  </div>
);
