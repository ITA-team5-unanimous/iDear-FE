import type {Meta, StoryObj} from '@storybook/nextjs';
import UpButton from '@/components/buttons/UpFloatingButton';

const meta: Meta<typeof UpButton> = {
  title: 'Components/Buttons/Up Floating Button',
  component: UpButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: {action: 'clicked', description: '화면 상단으로 이동'},
  },
};

export default meta;
type Story = StoryObj<typeof UpButton>;

export const Default: Story = {
  args: {},
};
