import type {Meta, StoryObj} from '@storybook/nextjs';
import SaveButton from '@/components/buttons/SaveButton';

const meta: Meta<typeof SaveButton> = {
  title: 'Components/Buttons/SaveButton',
  component: SaveButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '버튼이 활성화 상태인지 여부',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 시 호출되는 함수',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SaveButton>;

export const Default: Story = {
  args: {
    isOpen: false,
  },
};

export const Active: Story = {
  args: {
    isOpen: true,
  },
};
