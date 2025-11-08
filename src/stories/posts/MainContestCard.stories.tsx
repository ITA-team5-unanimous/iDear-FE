import React from 'react';
import {Meta, StoryObj} from '@storybook/nextjs';
import ContestPost from '@/components/posts/ContestCard';

// 컴포넌트에 대한 메타데이터 정의
const meta: Meta<typeof ContestPost> = {
  title: 'Components/ContestCard', // Storybook 사이드바의 경로
  component: ContestPost,
  tags: ['autodocs'], // 자동 문서화를 위한 태그
  // propTypes/controls 설정 (선택 사항)
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ContestPost>;

// 기본 스토리
export const DefaultPost: Story = {
  args: {
    name: '2025년 [부산시민 모두를 위한 디지털 금융포용 정책 아이디어] 공모전',
    organizer: '국립부경대학교',
    d_day: 10,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKRY63t_07oVVNkww1iMbnsyiJcr5qzWhhg&s',
  },
};
