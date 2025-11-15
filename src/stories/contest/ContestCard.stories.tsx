import {Meta, StoryObj} from '@storybook/nextjs';
import {ContestCard} from '@/components/contest/ContestCard';

// 컴포넌트에 대한 메타데이터 정의
const meta: Meta<typeof ContestCard> = {
  title: 'Components/Contest/Contest Card',
  component: ContestCard,
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
type Story = StoryObj<typeof ContestCard>;

// 기본 스토리
export const DefaultPost: Story = {
  args: {
    id: 1,
    title: '2025년 [부산시민 모두를 위한 디지털 금융포용 정책 아이디어] 공모전',
    hostingOrganization: '국립부경대학교',
    d_day: 10,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKRY63t_07oVVNkww1iMbnsyiJcr5qzWhhg&s',
  },
};
