interface GlobalButtonProps {
  onClick: () => void;
  text: string;
}

export default function GlobalButton({onClick, text}: GlobalButtonProps) {
  return (
    <button
      aria-label={text}
      onClick={onClick}
      type='button'
      className='bg-primary rounded-sm pt-3 pr-6 pb-3 pl-6 text-lg font-bold text-white'>
      {text}
    </button>
  );
}
