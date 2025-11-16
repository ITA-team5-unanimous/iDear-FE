import React from 'react';

interface GlobalButtonProps {
  onClick: () => void;
  text: string;
  icon?: React.ReactNode;
}

export default function GlobalButton({onClick, text, icon}: GlobalButtonProps) {
  return (
    <button
      aria-label={text}
      onClick={onClick}
      type='button'
      className='bg-primary flex w-[210px] flex-row justify-center gap-[10px] rounded-sm pt-3 pr-6 pb-3 pl-6 text-center text-lg font-bold text-white'>
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
}
