import clsx from 'clsx';
import FileIcon from '@/assets/idea/file.svg';
import ImageIcon from '@/assets/idea/image.svg';
import GithubIcon from '@/assets/idea/github.svg';
import FigmaIcon from '@/assets/idea/figma.svg';
import ChevronRight from '@/assets/chevrons/chevron-right.svg';
import DeleteFileIcon from '@/assets/idea/delete-file.svg';
import {Attachment} from '@/schemas/idea';
import {getAttachmentIconType} from '@/utils/getAttachmentIconType';

interface AttachmentListProps {
  attachments?: Attachment[];
  isEditable?: boolean;
  onDelete?: (index: number) => void;
}

export const AttachmentList = ({
  attachments,
  isEditable = false,
  onDelete,
}: AttachmentListProps) => {
  if (!attachments || attachments.length === 0) return <>파일이 없습니다.</>;

  return (
    <ul className='flex flex-col gap-6'>
      {attachments.map((file, idx) => {
        const iconType = getAttachmentIconType(file.name, file.url);

        const Icon =
          iconType === 'image'
            ? ImageIcon
            : iconType === 'github'
              ? GithubIcon
              : iconType === 'figma'
                ? FigmaIcon
                : FileIcon;

        const isLink = iconType === 'github' || iconType === 'figma';

        return (
          <li
            key={`${file.name}-${idx}`}
            className={clsx(
              'border-primary flex h-[65px] max-w-full flex-row items-center gap-[23px] rounded-sm border py-3 pl-4',
              isEditable ? 'pr-[23px]' : 'pr-[71.25px]'
            )}>
            <Icon />

            {isLink ? (
              <a
                href={file.url}
                target='_blank'
                rel='noopener noreferrer'
                className='line-clamp-2 min-w-0 flex-1 text-xl font-medium break-all underline'>
                {file.name}
              </a>
            ) : (
              <span className='line-clamp-2 min-w-0 flex-1 text-xl font-medium break-all'>
                {file.name}
              </span>
            )}

            {!isLink && (
              <>
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
              </>
            )}

            {isEditable && (
              <button
                aria-label='첨부파일 삭제'
                onClick={() => onDelete?.(idx)}>
                <DeleteFileIcon />
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};
