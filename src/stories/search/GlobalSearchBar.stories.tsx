import type {Meta, StoryObj} from '@storybook/nextjs';
import GlobalSearchBar from '@/components/Search/GlobalSearchBar';

// --- Meta 정의 ---
const meta: Meta<typeof GlobalSearchBar> = {
  title: 'Components/Contest/Global SearchBar',
  component: GlobalSearchBar,
  parameters: {
    layout: 'centered',
  },
  args: {
    placeholder: '검색어를 입력하세요',
    onSearch: (keyword: string) => {
      console.log('검색 실행:', keyword);
    },
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
