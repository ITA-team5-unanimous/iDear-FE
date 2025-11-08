import {MainActionButton} from '@/components/buttons/MainActionButton';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof MainActionButton> = {
  title: 'Components/Buttons/Main Action Button',
  component: MainActionButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: 'text',
      description: '버튼에 표시될 텍스트입니다.',
      defaultValue: '시작하기',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MainActionButton>;

export const Default: Story = {
  args: {
    text: '공모전 보러 가기',
  },
};
