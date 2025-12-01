import Plus from '@/assets/common/plus.svg';

interface PlusButtonProps {
  onClick: () => void;
}

export const PlusButton = ({onClick}: PlusButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='bg-primary flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-full'
      aria-label='사진 추가'>
      <Plus />
    </button>
  );
};
