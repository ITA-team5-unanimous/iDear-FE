import {Meta, StoryObj} from '@storybook/nextjs';
import ContestSearchBar from '@/components/contest/ContestSearchBar';

const meta: Meta<typeof ContestSearchBar> = {
  title: 'Components/Contest/Contest Search Bar',
  component: ContestSearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSearch: {action: 'searched', description: '검색 실행 시 호출되는 함수'},
  },
};

export default meta;
type Story = StoryObj<typeof ContestSearchBar>;

export const Default: Story = {
  args: {
    onSearch: (keyword: string) => console.log('검색:', keyword),
  },
};
