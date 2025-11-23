import {Meta, StoryObj} from '@storybook/nextjs';
import {PlusButton} from '@/components/buttons/PlusButton';

const meta: Meta<typeof PlusButton> = {
  title: 'Components/Buttons/Plus Button',
  component: PlusButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `이미지 파일 박스를 추가할 수 있는 버튼 컴포넌트입니다.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PlusButton>;

export const Default: Story = {
  render: (args) => <PlusButton {...args} />,
};
