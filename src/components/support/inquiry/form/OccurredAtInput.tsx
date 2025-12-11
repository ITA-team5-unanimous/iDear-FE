'use client';

interface OccurredAtInputProps {
  value: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

export const OccurredAtInput = ({
  value,
  readOnly = false,
  onChange,
}: OccurredAtInputProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <p className='text-2xl font-bold'>*발생 시각</p>
      <input
        type='text'
        value={value}
        readOnly={readOnly}
        placeholder='YYYY-MM-DD HH:mm:ss'
        className={`border-primary max-w-[512px] rounded-[8px] border px-6 py-2 outline-none`}
        onChange={(e) => {
          if (!readOnly && onChange) {
            onChange(e.target.value);
          }
        }}
      />
    </div>
  );
};
