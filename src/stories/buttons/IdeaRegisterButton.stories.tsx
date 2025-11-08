import React from 'react';
import {Meta, StoryObj} from '@storybook/nextjs';
import IdeaRegisterButton from '@/components/buttons/IdeaRegisterButton';

const meta: Meta<typeof IdeaRegisterButton> = {
  title: 'Components/Buttons/IdeaRegisterButton',
  component: IdeaRegisterButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `아이디어 등록을 위한 기본 버튼 컴포넌트입니다. 클릭 시 등록 이벤트를 실행할 수 있습니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IdeaRegisterButton>;

// 기본 스토리
export const Default: Story = {
  args: {
    onClickRegister: () => alert('아이디어 등록 버튼 클릭!'),
  },
};
