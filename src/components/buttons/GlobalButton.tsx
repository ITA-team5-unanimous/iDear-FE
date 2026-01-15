import clsx from 'clsx';
import React from 'react';

interface GlobalButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'gray';
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function GlobalButton({
  onClick,
  text,
  icon,
  variant = 'primary',
  type = 'button',
  disabled,
}: GlobalButtonProps) {
  return (
    <button
      aria-label={text}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        'flex min-w-[210px] items-center justify-center gap-[10px] rounded-sm px-6 py-3 text-xl font-bold transition-colors',
        disabled
          ? 'bg-gray cursor-not-allowed opacity-50'
          : variant === 'primary'
            ? 'bg-primary hover:bg-primary/90'
            : 'bg-gray hover:bg-gray/90',
        'text-white'
      )}>
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
}
