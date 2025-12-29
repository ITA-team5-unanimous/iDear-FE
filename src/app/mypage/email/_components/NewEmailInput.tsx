'use client';

import clsx from 'clsx';

interface NewEmailInputProps {
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

export const NewEmailInput = ({value, error, onChange}: NewEmailInputProps) => {
  return (
    <div className='flex flex-col'>
      <input
        value={value}
        placeholder='새 이메일'
        onChange={(e) => onChange(e.target.value)}
        className={clsx(
          'bg-gray-3 placeholder:text-gray h-[65px] w-full rounded-lg px-6 text-xl outline-none',
          error ? 'border-primary border-2' : 'border-gray border'
        )}
      />

      {error && <span className='text-primary pt-3 text-xl'>{error}</span>}
    </div>
  );
};
