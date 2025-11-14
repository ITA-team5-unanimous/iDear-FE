import type {Meta, StoryObj} from '@storybook/nextjs';
import SortDropdown from '@/components/dropdown/SortDropdown';

const meta: Meta<typeof SortDropdown> = {
  title: 'Components/Dropdown/Sort Dropdown',
  component: SortDropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '드롭다운 열림 여부',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 시 실행되는 함수',
    },
    currentLabel: {
      control: 'text',
      description: '현재 선택된 정렬 기준 레이블',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SortDropdown>;

export const Closed: Story = {
  args: {
    isOpen: false,
    currentLabel: '최신순',
  },
};

export const Opened: Story = {
  args: {
    isOpen: true,
    currentLabel: '최신순',
  },
};
