import GlobalButton from '@/components/buttons/GlobalButton';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof GlobalButton> = {
  title: 'Components/Buttons/Global Button',
  component: GlobalButton,
  tags: ['autodocs'],
  argTypes: {
    text: {control: 'text', description: '버튼에 표시될 텍스트'},
    onClick: {action: 'clicked', description: '버튼 클릭 시 실행될 함수'},
  },
  parameters: {
    docs: {
      description: {
        component: `사이트 전반에서 쓰이는 글로벌 버튼 컴포넌트입니다. 버튼이 클릭되었을 때 실행할 함수와 text를 props로 받아서 렌더링합니다.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '아이디어 등록하기',
  },
};
