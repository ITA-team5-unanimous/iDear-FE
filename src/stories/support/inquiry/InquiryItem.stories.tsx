import {Meta, StoryObj} from '@storybook/nextjs';
import {InquiryItem} from '@/app/support/inquiry/_components/InquiryItem';

const meta: Meta<typeof InquiryItem> = {
  title: 'Components/Support/Inquiry/Inquiry Item',
  component: InquiryItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: ``,
      },
    },
    nextjs: {appDirectory: true},
  },
};

export default meta;
type Story = StoryObj<typeof InquiryItem>;

export const Confirming: Story = {
  args: {
    displayId: 1,
    inquiryId: 1,
    category: '아이디어 보호/블록체인 관련 문의',
    description:
      '아이디어 등록 시 해시값 생성 오류가 납니다. 어떻게 해야 하자요입니다 이거 어떻게 해결가능한가요',
    status: 'RECEIVED',
  },
};
