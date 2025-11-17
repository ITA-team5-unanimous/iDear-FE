import {NavItem} from '@/components/layout/NavItem';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof NavItem> = {
  title: 'Components/Layout/Nav Item',
  component: NavItem,
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    docs: {
      description: {
        component: `
NavBar 내에서 사용되는 개별 메뉴 항목 컴포넌트입니다.

- 링크(href)와 라벨(label) 전달
- hover 시 밑줄 표시
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Contest: Story = {
  args: {
    href: '/contest',
    label: '공모전',
  },
};

export const Idea: Story = {
  args: {
    href: '/idea',
    label: '나의 아이디어',
  },
};
