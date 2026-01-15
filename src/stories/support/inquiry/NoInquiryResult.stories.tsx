import {NoInquiryResult} from '@/app/support/inquiry/_components/NoInquiryResult';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof NoInquiryResult> = {
  title: 'Components/Support/Inquiry/No Inquiry Result',
  component: NoInquiryResult,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `나의 문의 내역에 사항이 없을 때 표시되는 컴포넌트입니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NoInquiryResult>;

export const Default: Story = {};
