import ChevronUpIcon from '@/assets/chevrons/chevron-up-white.svg';

interface UpFloatingButtonProps {
  onClick?: () => void;
}

export default function UpFloatingButton({onClick}: UpFloatingButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-label='페이지 상단으로 이동'
      className='bg-primary flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full transition-transform duration-100 hover:scale-105 active:scale-95'>
      <ChevronUpIcon />
    </button>
  );
}
