import clsx from 'clsx';

interface GlobalSmallButtonProps {
  onClick: () => void;
  text: string;
}

export const GlobalSmallButton = ({text, onClick}: GlobalSmallButtonProps) => {
  return (
    <button
      aria-label={text}
      onClick={onClick}
      className={clsx(
        'bg-primary rounded-[4px] py-[9px] text-xl font-bold text-white',
        text === '확인' ? 'px-7' : 'px-3'
      )}>
      {text}
    </button>
  );
};
