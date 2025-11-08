import {DayBadge} from '@/components/contest/DayBadge';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof DayBadge> = {
  title: 'Components/Contest/DayBadge',
  component: DayBadge,
  tags: ['autodocs'],
  argTypes: {
    date: {control: 'text'},
  },
  parameters: {
    docs: {
      description: {
        component: `공모전 시작 D-day를 확인할 수 있는 뱃지 컴포넌트입니다.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DayBadge>;

export const Default: Story = {
  args: {
    date: '10',
  },
};

export const Today: Story = {
  args: {
    date: '0',
  },
};

export const Future: Story = {
  args: {
    date: '5',
  },
};
