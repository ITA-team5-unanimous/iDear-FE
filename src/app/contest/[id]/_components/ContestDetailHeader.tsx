import {BackButton} from '@/components/buttons/BackButton';

export const ContestDetailHeader = ({title}: {title: string}) => {
  return (
    <>
      <BackButton />
      <h1 className='border-b-primary w-full border-b pb-4 text-[32px] font-bold'>
        {title}
      </h1>
    </>
  );
};
