import React from 'react';
import {OAUTH_SERVICES} from '@/constants/oauth';
import {Meta, StoryObj} from '@storybook/nextjs';
import {SocialLoginButton} from '@/components/buttons/SocialLoginButton';

const meta: Meta<typeof SocialLoginButton> = {
  title: 'Components/Buttons/Social Login Button',
  component: SocialLoginButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `카카오, 네이버, 구글 로그인을 진행할 수 있는 소셜 로그인 버튼 컴포넌트입니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SocialLoginButton>;

export const AllButtons: Story = {
  render: () => (
    <div className='flex w-[433px] flex-col gap-4'>
      {OAUTH_SERVICES.map((service) => (
        <SocialLoginButton key={service.name} name={service.name} />
      ))}
    </div>
  ),
};
