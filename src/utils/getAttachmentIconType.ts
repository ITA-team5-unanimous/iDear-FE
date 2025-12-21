import {isImageFile} from '@/utils/isImageFile';

export type AttachmentIconType = 'image' | 'github' | 'figma' | 'file';

export const getAttachmentIconType = (
  fileName: string,
  url: string
): AttachmentIconType => {
  if (isImageFile(fileName)) return 'image';

  if (url.includes('github.com')) return 'github';
  if (url.includes('figma.com')) return 'figma';

  return 'file';
};
