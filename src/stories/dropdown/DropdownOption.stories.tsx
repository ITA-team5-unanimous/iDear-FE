import type {Meta, StoryObj} from '@storybook/nextjs';
import DropdownOption from '@/components/dropdown/DropdownOption';

const meta: Meta<typeof DropdownOption> = {
  title: 'Components/Dropdown/Dropdown Option',
  component: DropdownOption,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {control: 'text', description: '버튼에 표시될 텍스트'},
    onClick: {action: 'clicked', description: '버튼 클릭 시 실행되는 함수'},
  },
};

export default meta;
type Story = StoryObj<typeof DropdownOption>;

export const Default: Story = {
  args: {
    label: '마감임박순',
  },
};

export const AnotherOption: Story = {
  args: {
    label: '인기순',
  },
};
