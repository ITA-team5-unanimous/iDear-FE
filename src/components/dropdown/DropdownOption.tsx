interface DropdownOptionProps {
  onClick: () => void;
  label: string;
  isLast: boolean;
}

export default function DropdownOption({
  label,
  onClick,
  isLast,
}: DropdownOptionProps) {
  const borderClasses = isLast ? '' : 'border-b-2';

  return (
    <button
      aria-label='드롭다운 옵션 버튼'
      onClick={onClick}
      className={`border-primary flex h-[70px] w-[180px] cursor-pointer items-center justify-center ${borderClasses} transition-colors hover:bg-[#FFA2A2]`}>
      <span className='text-2xl font-bold text-black'>{label}</span>
    </button>
  );
}
