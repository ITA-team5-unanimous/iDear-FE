// src/components/idea/Pagination.stories.tsx
import {Pagination} from '@/components/idea/Pagination';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Idea/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalItems: {control: 'number', description: '전체 아이템 수'},
    itemsPerPage: {control: 'number', description: '페이지당 아이템 수'},
    onPageChange: {action: 'pageChanged', description: '페이지 변경 콜백'},
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '아이디어 페이지에서 페이지네이션을 표시하는 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalItems: 50,
    itemsPerPage: 8,
  },
};
