import {IdeaItem} from '@/app/idea/_components/IdeaItem';
import {Meta, StoryObj} from '@storybook/nextjs';
const meta: Meta<typeof IdeaItem> = {
  title: 'Components/Idea/Idea Item',
  tags: ['autodocs'],
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
    ideaId: 1,
    title:
      '2025년 이스포츠 대학리그 결선진출권(수도강원권) 대표 참가 대학 모집',
    host: '문화체육관광부',
    dday: 12,
    requestedAt: '2025-11-05T10:30:00',
  },
};
