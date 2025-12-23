import {Meta, StoryObj} from '@storybook/nextjs';
import {FileBox} from '@/app/register/[id]/_components/file/FileBox';

const meta: Meta<typeof FileBox> = {
  title: 'Components/Register/File Box',
  component: FileBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '아이디어 등록 페이지에서 파일 유형(이미지, GitHub, Figma 등)을 표시하는 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileBox>;

export const Image: Story = {
  args: {
    icon: 'image',
    text: '이미지 파일',
  },
};
