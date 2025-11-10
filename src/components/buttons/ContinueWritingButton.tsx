interface ContinueWritingButtonProps {
  onClick: () => void;
  text: string;
}

export const ContinueWritingButton = ({
  text,
  onClick,
}: ContinueWritingButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={text}
      className='bg-gray rounded-[4px] px-3 py-[9px] text-xl text-white'>
      {text}
    </button>
  );
};
