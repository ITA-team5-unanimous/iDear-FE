import {Radio} from '@/components/common/radio/Radio';

interface Option {
  label: string;
  value: string;
}

interface RadioGroupProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}

export const RadioGroup = ({value, onChange, options}: RadioGroupProps) => {
  return (
    <div className='flex flex-col gap-4'>
      {options.map((opt) => (
        <Radio
          key={opt.value}
          label={opt.label}
          checked={value === opt.value}
          onChange={() => onChange(opt.value)}
        />
      ))}
    </div>
  );
};
