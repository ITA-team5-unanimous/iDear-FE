import {Meta, StoryObj} from '@storybook/nextjs';
import {NoSearchResult} from '@/components/common/search/NoSearchResult';

const meta: Meta<typeof NoSearchResult> = {
  title: 'Components/Common/Search/No Search Result',
  component: NoSearchResult,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `검색 결과가 없을 때 표시되는 컴포넌트입니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NoSearchResult>;

export const Default: Story = {};
