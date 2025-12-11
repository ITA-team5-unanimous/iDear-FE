import {Radio} from '@/components/common/radio/Radio';

interface Option<T> {
  label: string;
  value: T;
}

interface RadioGroupProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: Option<T>[];
  disabled?: boolean;
}

export const RadioGroup = <T extends string>({
  value,
  onChange,
  options,
  disabled,
}: RadioGroupProps<T>) => {
  return (
    <div className='flex flex-col gap-4'>
      {options.map((opt) => (
        <Radio
          key={opt.value}
          label={opt.label}
          checked={value === opt.value}
          onChange={() => onChange(opt.value)}
          disabled={disabled}
        />
      ))}
    </div>
  );
};
