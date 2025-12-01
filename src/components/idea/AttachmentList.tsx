import FileIcon from '@/assets/idea/file.svg';
import ChevronRight from '@/assets/chevrons/chevron-right.svg';
import DeleteFileIcon from '@/assets/idea/delete-file.svg';
import {Idea} from '@/schemas/idea';
import clsx from 'clsx';

interface AttachmentListProps {
  attachments?: Idea['attachments'];
  isEditable?: boolean;
  onDelete?: (fileName: string) => void;
}

export const AttachmentList = ({
  attachments,
  isEditable = false,
  onDelete,
}: AttachmentListProps) => {
  if (!attachments || attachments.length === 0) return null;

  return (
    <ul className='flex flex-col gap-4'>
      {attachments.map((file, idx) => (
        <li
          key={idx}
          className={clsx(
            'border-primary flex max-w-full flex-row items-center gap-[23px] border py-3 pl-4',
            isEditable ? 'pr-[23px]' : 'pr-[71.25px]'
          )}>
          <FileIcon />
          <span className='flex-1 text-xl font-medium'>{file.name}</span>

          <a
            href={file.url}
            download={file.name}
            className='flex flex-row items-center gap-4'
            aria-label='아이디어 첨부파일 다운로드'>
            다운로드 <ChevronRight />
          </a>
          <button
            className='flex flex-row items-center gap-4'
            aria-label='아이디어 첨부파일 확인'
            onClick={() => window.open(file.url, '_blank')}>
            바로보기 <ChevronRight />
          </button>
          {isEditable && (
            <button
              aria-label='첨부파일 삭제'
              onClick={() => onDelete?.(file.name)}>
              <DeleteFileIcon />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};
