interface GlobalButtonProps {
  onClick: () => void;
  text: string;
}

export default function GlobalButton({onClick, text}: GlobalButtonProps) {
  return (
    <button
      aria-label={text}
      onClick={onClick}
      className='bg-primary rounded-sm pt-3 pr-6 pb-3 pl-6 text-lg text-white'>
      {text}
    </button>
  );
}
