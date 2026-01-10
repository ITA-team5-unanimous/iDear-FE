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
        'flex h-[65px] w-full items-center gap-3 rounded-sm border px-6 transition-colors',
        isSelected ? 'border-primary' : 'border-primary border-dashed'
      )}>
      {Icon && (
        <div className='flex-shrink-0'>
          <Icon />
        </div>
      )}
      <span className='line-clamp-2 min-w-0 flex-1 text-xl font-medium break-all'>
        {displayText ?? text}
      </span>
    </div>
  );
};
