import {IdeaItem} from '@/components/idea/IdeaItem';
import {Meta, StoryObj} from '@storybook/nextjs';
const meta: Meta<typeof IdeaItem> = {
  title: 'Components/Idea/Idea Item',
  tags: ['autodocs'],
  argTypes: {
    registerDate: {
      control: 'text',
    },
  },
  component: IdeaItem,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `나의 아이디어에서 리스트 프리뷰를 보여주는 컴포넌트입니다.`,
      },
    },
    nextjs: {appDirectory: true},
  },
};

export default meta;
type Story = StoryObj<typeof IdeaItem>;

export const Default: Story = {
  args: {
    title:
      '2025년 이스포츠 대학리그 결선진출권(수도강원권) 대표 참가 대학 모집',
    hostingOrganization: '문화체육관광부',
    d_day: 12,
    registerDate: '2025.11.05',
  },
};
