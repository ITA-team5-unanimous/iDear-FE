import {Meta, StoryObj} from '@storybook/nextjs';
import {ConsultationCard} from '@/components/support/ConsultationCard';
import ConsultationIconFirst from '@/assets/support/consultation-1.svg';

const meta: Meta<typeof ConsultationCard> = {
  title: 'Components/Support/Consultation Card',
  component: ConsultationCard,
  tags: ['autodocs'],
  argTypes: {
    title: {control: 'text'},
    content: {control: 'object'},
    icon: {table: {disable: true}},
  },
  parameters: {
    docs: {
      description: {
        component: `고객센터 상담 절차를 보여주는 카드 컴포넌트입니다.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ConsultationCard>;

export const Default: Story = {
  args: {
    title: '문제 유형 선택',
    icon: <ConsultationIconFirst />,
    content: [
      {text: '고객센터 페이지에서', variant: 'default'},
      {text: '문의 유형을 선택해주세요.', variant: 'default'},
    ],
  },
  render: (args) => <ConsultationCard {...args} />,
};
