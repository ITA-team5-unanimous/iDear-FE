interface TextAreaFieldProps {
  value: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

export const TextAreaField = ({
  value,
  readOnly = false,
  onChange,
}: TextAreaFieldProps) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-row items-center gap-6'>
        <p className='text-2xl font-bold'>*문제 상황</p>
        <p className='text-primary text-xl font-medium'>
          최대한 자세하게 작성해 주세요!
        </p>
      </div>

      <textarea
        value={value}
        readOnly={readOnly}
        placeholder='ex) 확인증 다운로드가 안 됩니다.'
        className='border-primary h-auto resize-none overflow-auto rounded-[8px] border px-6 pt-6 pb-1 outline-none'
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};
