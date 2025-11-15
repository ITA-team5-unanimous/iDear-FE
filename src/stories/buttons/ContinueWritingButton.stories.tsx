import {ContinueWritingButton} from '@/components/buttons/ContinueWritingButton';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof ContinueWritingButton> = {
  title: 'Components/Buttons/Continue Writing Button',
  component: ContinueWritingButton,
  tags: ['autodocs'],
  argTypes: {
    text: {control: 'text', description: '버튼에 표시될 텍스트'},
    onClick: {action: 'clicked', description: '버튼 클릭 시 실행될 함수'},
  },
  parameters: {
    docs: {
      description: {
        component: `아이디어 작성 중 이탈 확인 팝업의 ‘계속 작성하기’ 버튼 컴포넌트입니다. 버튼이 클릭되었을 때 실행할 함수와 text를 props로 받아서 렌더링합니다.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '계속 작성하기',
  },
};
