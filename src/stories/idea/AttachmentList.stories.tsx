import {AttachmentList} from '@/app/idea/[id]/_components/AttachmentList';
import {mockIdeaDetail} from '@/mocks/data/mockIdeaData';
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
    attachments: mockIdeaDetail.versions[0].attachments,
    isEditable: true,
  },
  render: (args) => <AttachmentList {...args} />,
};
