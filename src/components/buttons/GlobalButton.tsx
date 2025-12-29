import clsx from 'clsx';
import React from 'react';

interface GlobalButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'gray';
  type?: 'button' | 'submit';
}

export default function GlobalButton({
  onClick,
  text,
  icon,
  variant = 'primary',
  type = 'button',
}: GlobalButtonProps) {
  return (
    <button
      aria-label={text}
      onClick={onClick}
      type={type}
      className={clsx(
        'flex min-w-[210px] flex-row items-center justify-center gap-[10px] rounded-sm pt-3 pr-6 pb-3 pl-6 text-center text-xl font-bold text-white',
        variant === 'primary' && 'bg-primary',
        variant === 'gray' && 'bg-gray'
      )}>
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
}
