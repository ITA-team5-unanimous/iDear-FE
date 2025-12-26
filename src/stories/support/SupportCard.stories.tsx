import {Meta, StoryObj} from '@storybook/nextjs';
import {SupportCard} from '@/app/support/_components/SupportCard';

const meta: Meta<typeof SupportCard> = {
  title: 'Components/Support/Support Card',
  component: SupportCard,
  tags: ['autodocs'],
  argTypes: {
    title: {control: 'text'},
    contents: {control: 'object'},
  },
  parameters: {
    docs: {
      description: {
        component: `고객센터 문의 항목 예시를 보여주는 카드 컴포넌트입니다.`,
      },
    },
    nextjs: {appDirectory: true},
  },
};

export default meta;

type Story = StoryObj<typeof SupportCard>;

export const Default: Story = {
  args: {
    title: '아이디어 보호·블록체인 검증 문의',
    contents: [
      '확인증 발급 과정 안내',
      '블록체인 저장 방식 및 위변조 방지 기술 설명',
      '내 아이디어 정상 등록 여부 확인 요청',
    ],
  },
  render: (args) => {
    return <SupportCard {...args} />;
  },
};
