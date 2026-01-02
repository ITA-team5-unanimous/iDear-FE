import ImageIcon from '@/assets/idea/image.svg';
import FileIcon from '@/assets/idea/file.svg';
import GitHubIcon from '@/assets/idea/github.svg';
import FigmaIcon from '@/assets/idea/figma.svg';

export const FILE_BOX_ICONS = {
  image: ImageIcon,
  file: FileIcon,
  github: GitHubIcon,
  figma: FigmaIcon,
} as const;

export type FileBoxIconType = keyof typeof FILE_BOX_ICONS;
