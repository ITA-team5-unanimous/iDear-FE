import MainArrow from '@/assets/onboarding/main-arrow.svg';

interface MainActionButtonProps {
  onClick: () => void;
  text: string;
}

export const MainActionButton = ({text, onClick}: MainActionButtonProps) => {
  return (
    <button
      type='button'
      aria-label={text}
      onClick={onClick}
      className='border-primary flex flex-col items-start rounded-sm border-2 p-3'>
      <span className='text-primary font-medium sm:text-[16px] xl:text-xl'>
        {text}
      </span>
      <MainArrow className='-mt-2' />
    </button>
  );
};
