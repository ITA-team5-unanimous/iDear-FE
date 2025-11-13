import {Meta, StoryObj} from '@storybook/nextjs';
import PopularContest from '@/components/contest/PopularContest';

const meta: Meta<typeof PopularContest> = {
  title: 'Components/Contest/Popular Contest',
  component: PopularContest,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'text',
      description: '공모전 이름',
    },
    image: {
      control: 'text',
      description: '공모전 이미지 (없으면 기본 이미지 사용)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PopularContest>;

export const Default: Story = {
  args: {
    name: '2025년 [부산시민 모두를 위한 디지털 금융포용 정책 아이디어] 공모전',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKRY63t_07oVVNkww1iMbnsyiJcr5qzWhhg&s',
  },
};
