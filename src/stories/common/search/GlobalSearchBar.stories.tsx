import type {Meta, StoryObj} from '@storybook/nextjs';
import {GlobalSearchBar} from '@/components/common/search/GlobalSearchBar';

const meta: Meta<typeof GlobalSearchBar> = {
  title: 'Components/Common/Search/Global Search Bar',
  component: GlobalSearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `전역 검색 바 컴포넌트로, 사용자가 공모전이나 아이디어를 검색할 수 있습니다.`,
      },
    },
  },
  args: {
    placeholder: '검색어를 입력하세요',
  },
};

export default meta;
type Story = StoryObj<typeof GlobalSearchBar>;

export const Default: Story = {};

export const LongPlaceholder: Story = {
  args: {
    placeholder: '다양한 공모전을 검색해보세요!.',
  },
};
