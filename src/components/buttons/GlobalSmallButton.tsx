import clsx from 'clsx';

interface GlobalSmallButtonProps {
  onClick: () => void;
  text: string;
  variant?: 'default' | 'wide';
  disabled?: boolean;
}

export const GlobalSmallButton = ({
  text,
  onClick,
  variant,
  disabled,
}: GlobalSmallButtonProps) => {
  return (
    <button
      aria-label={text}
      onClick={disabled ? undefined : onClick}
      type='button'
      disabled={disabled}
      className={clsx(
        'rounded-[4px] py-[9px] text-xl font-bold',
        variant === 'wide' ? 'px-7' : 'px-3',
        disabled
          ? 'bg-primary/50 cursor-not-allowed text-white'
          : 'bg-primary text-white'
      )}>
      {text}
    </button>
  );
};
