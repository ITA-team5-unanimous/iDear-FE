import clsx from 'clsx';

interface RadioProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

export const Radio = ({label, checked, onChange, disabled}: RadioProps) => {
  return (
    <label className='flex w-fit cursor-pointer items-center gap-3'>
      <input
        type='radio'
        className='sr-only'
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span
        className={clsx(
          'relative flex h-5 w-5 items-center justify-center rounded-full border',
          checked ? 'border-primary' : 'border-gray'
        )}>
        <span
          className={clsx(
            'absolute rounded-full transition-all duration-200',
            checked ? 'bg-primary h-3 w-3' : 'h-0 w-0 bg-transparent'
          )}
        />
      </span>

      <span className='text-xl font-medium'>{label}</span>
    </label>
  );
};
