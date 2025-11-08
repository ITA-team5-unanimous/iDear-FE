import {Meta, StoryObj} from '@storybook/nextjs';
import ContestPost from '@/components/contest/ContestCard';

// 컴포넌트에 대한 메타데이터 정의
const meta: Meta<typeof ContestPost> = {
  title: 'Components/Contest/Contest Card',
  component: ContestPost,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: `공모전 정보를 표시하는 카드 컴포넌트입니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContestPost>;

// 기본 스토리
export const DefaultPost: Story = {
  args: {
    id: 1,
    name: '2025년 [부산시민 모두를 위한 디지털 금융포용 정책 아이디어] 공모전',
    organizer: '국립부경대학교',
    d_day: 10,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKRY63t_07oVVNkww1iMbnsyiJcr5qzWhhg&s',
  },
};
