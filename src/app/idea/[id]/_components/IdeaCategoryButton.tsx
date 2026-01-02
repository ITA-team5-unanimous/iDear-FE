import clsx from 'clsx';

interface IdeaCategoryButtonProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export const IdeaCategoryButton = ({
  text,
  isSelected,
  onClick,
}: IdeaCategoryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-[210px] border-2 py-4 text-xl font-medium transition-colors',
        isSelected ? 'border-primary' : 'border-gray'
      )}>
      {text}
    </button>
  );
};
