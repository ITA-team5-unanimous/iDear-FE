import {Meta, StoryObj} from '@storybook/nextjs';
import {UrlAttachModal} from '@/components/common/file/UrlAttachModal';

const meta: Meta<typeof UrlAttachModal> = {
  title: 'Components/Register/Url Attach Modal',
  component: UrlAttachModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '외부 URL(GitHub, Figma 등)을 입력하여 첨부하는 모달 컴포넌트입니다.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof UrlAttachModal>;

export const Default: Story = {};
