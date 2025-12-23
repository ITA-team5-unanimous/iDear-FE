import {FILE_BOX_ICONS, FileBoxIconType} from '@/constants/filebox-icon';
import clsx from 'clsx';

interface FileBoxProps {
  icon: FileBoxIconType;
  text?: string;
  onClick?: () => void;
  file?: File | null;
  selectedUrl?: string;
}

export const FileBox = ({
  icon,
  text,
  onClick,
  file,
  selectedUrl,
}: FileBoxProps) => {
  const Icon = FILE_BOX_ICONS[icon];
  const displayText = file?.name ?? selectedUrl;
  const isSelected = !!displayText;

  return (
    <div
      onClick={onClick}
      className={clsx(
        'flex h-[65px] w-full items-center gap-3 rounded-lg border px-6',
        isSelected
          ? 'border-primary hover:bg-primary-2 hover:border-transparent'
          : 'border-primary border-dashed'
      )}>
      {Icon && <Icon />}
      <span className='text-xl'>{displayText ?? text}</span>
    </div>
  );
};
