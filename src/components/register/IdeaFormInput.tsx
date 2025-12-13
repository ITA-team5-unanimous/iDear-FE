interface IdeaFormInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const IdeaFormInput = ({label, value, onChange}: IdeaFormInputProps) => {
  return (
    <div>
      <p className='text-2xl font-bold'>{label}</p>
      <input
        className='border-primary mt-6 h-10 w-[564px] border-b border-solid focus:outline-none'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
