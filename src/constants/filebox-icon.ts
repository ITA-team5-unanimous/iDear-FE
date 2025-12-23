import ImageIcon from '@/assets/register/image-icon.svg';
import FileIcon from '@/assets/register/file-icon.svg';
import GitHubIcon from '@/assets/register/github-icon.svg';
import FigmaIcon from '@/assets/register/figma-icon.svg';

export const FILE_BOX_ICONS = {
  image: ImageIcon,
  file: FileIcon,
  github: GitHubIcon,
  figma: FigmaIcon,
} as const;

export type FileBoxIconType = keyof typeof FILE_BOX_ICONS;
