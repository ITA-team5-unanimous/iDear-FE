import MainArrow from '@/assets/onboarding/main-arrow.svg';

interface MainActionButtonProps {
  text: string;
}

export const MainActionButton = ({text}: MainActionButtonProps) => {
  return (
    <button className='border-primary flex flex-col items-start rounded-sm border-2 p-5'>
      <span className='text-primary font-medium sm:text-[16px] xl:text-xl'>
        {text}
      </span>
      <MainArrow />
    </button>
  );
};
