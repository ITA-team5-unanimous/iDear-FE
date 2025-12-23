import FileIcon from '@/assets/idea/file.svg';
import ImageIcon from '@/assets/idea/image.svg';
import GithubIcon from '@/assets/idea/github.svg';
import FigmaIcon from '@/assets/idea/figma.svg';
import ChevronRight from '@/assets/chevrons/chevron-right.svg';
import DeleteFileIcon from '@/assets/idea/delete-file.svg';
import {Version} from '@/schemas/idea';
import clsx from 'clsx';
import {getAttachmentIconType} from '@/utils/getAttachmentIconType';

interface AttachmentListProps {
  attachments?: Version['attachments'];
  isEditable?: boolean;
  onDelete?: (fileName: string) => void;
}

export const AttachmentList = ({
  attachments,
  isEditable = false,
  onDelete,
}: AttachmentListProps) => {
  if (!attachments || attachments.length === 0) return <>파일이 없습니다.</>;

  return (
    <ul className='flex flex-col gap-4'>
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
            key={idx}
            className={clsx(
              'border-primary flex max-w-full flex-row items-center gap-[23px] border py-3 pl-4',
              isEditable ? 'pr-[23px]' : 'pr-[71.25px]'
            )}>
            <Icon />

            {isLink ? (
              <a
                href={file.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex-1 text-xl font-medium underline'>
                {file.name}
              </a>
            ) : (
              <span className='flex-1 text-xl font-medium'>{file.name}</span>
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
                onClick={() => onDelete?.(file.name)}>
                <DeleteFileIcon />
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};
