import {AttachmentList} from '@/app/idea/[id]/_components/AttachmentList';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof AttachmentList> = {
  title: 'Components/Idea/Attachment List',
  component: AttachmentList,
  tags: ['autodocs'],
  argTypes: {
    isEditable: {control: 'boolean', description: '수정 모드 여부'},
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '아이디어 기록함에서 첨부된 파일 리스트를 확인할 수 있는 리스트 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AttachmentList>;

export const Default: Story = {
  args: {
    attachments: [
      {
        name: '기획서.pdf',
        url: 'https://example.com/files/plan.pdf',
      },
      {
        name: '와이어프레임.fig',
        url: 'https://figma.com/file/xxxxx',
      },
      {
        name: 'Github Repository',
        url: 'https://github.com/example/repo',
      },
      {
        name: '스크린샷.png',
        url: 'https://example.com/images/screenshot.png',
      },
    ],
    isEditable: true,
  },
};
