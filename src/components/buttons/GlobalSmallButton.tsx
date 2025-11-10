import clsx from 'clsx';

interface GlobalSmallButtonProps {
  onClick: () => void;
  text: string;
  variant?: 'default' | 'wide';
}

export const GlobalSmallButton = ({
  text,
  onClick,
  variant,
}: GlobalSmallButtonProps) => {
  return (
    <button
      aria-label={text}
      onClick={onClick}
      type='button'
      className={clsx(
        'bg-primary rounded-[4px] py-[9px] text-xl font-bold text-white',
        variant === 'wide' ? 'px-7' : 'px-3'
      )}>
      {text}
    </button>
  );
};
