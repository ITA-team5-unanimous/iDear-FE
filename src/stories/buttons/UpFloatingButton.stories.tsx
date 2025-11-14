import type {Meta, StoryObj} from '@storybook/nextjs';
import {UpFloatingButton} from '@/components/buttons/UpFloatingButton';

const meta: Meta<typeof UpFloatingButton> = {
  title: 'Components/Buttons/Up Floating Button',
  component: UpFloatingButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `클릭시 페이지 상단으로 이동할 수 있는 버튼 컴포넌트입니다.`,
      },
    },
  },
  argTypes: {
    onClick: {action: 'clicked', description: '화면 상단으로 이동'},
  },
};

export default meta;
type Story = StoryObj<typeof UpFloatingButton>;

export const Default: Story = {
  args: {},
};
