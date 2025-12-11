import type {Meta, StoryObj} from '@storybook/nextjs';
import {GlobalPagination} from '@/components/common/pagination/GlobalPagination';

const meta: Meta<typeof GlobalPagination> = {
  title: 'Components/Common/Pagination/Global Pagination',
  component: GlobalPagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `아이디어 페이지에서 페이지네이션을 표시하는 컴포넌트입니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlobalPagination>;

export const Default: Story = {
  args: {
    totalItems: 42,
    itemsPerPage: 5,
    currentPage: 1,
  },
};
