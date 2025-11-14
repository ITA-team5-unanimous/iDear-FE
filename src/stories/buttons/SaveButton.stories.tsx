import type {Meta, StoryObj} from '@storybook/nextjs';
import {SaveButton} from '@/components/buttons/SaveButton';

const meta: Meta<typeof SaveButton> = {
  title: 'Components/Buttons/Save Button',
  component: SaveButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '사용자가 공모전이나 콘텐츠를 저장함에 추가하거나 해제할 때 사용하는 버튼 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    isOpen: {
      docs: {
        description: '버튼이 활성화 상태인지 여부',
      },
      control: 'boolean',
    },
    onClick: {
      docs: {
        description: '버튼 클릭 시 호출되는 함수',
      },
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SaveButton>;

export const Default: Story = {
  args: {
    isOpen: false,
  },
};

export const Active: Story = {
  args: {
    isOpen: true,
  },
};
