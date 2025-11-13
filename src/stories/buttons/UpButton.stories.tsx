import type {Meta, StoryObj} from '@storybook/nextjs';
import UpButton from '@/components/buttons/UpButton';

const meta: Meta<typeof UpButton> = {
  title: 'Components/Buttons/UpButton',
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
