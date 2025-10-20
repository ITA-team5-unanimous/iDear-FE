import {TestButton} from '@/components/TestButton';
import type {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof TestButton> = {
  title: 'Components/TestButton',
  component: TestButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TestButton>;

export const Default: Story = {
  args: {},
};
