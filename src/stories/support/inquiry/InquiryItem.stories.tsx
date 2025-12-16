import {Meta, StoryObj} from '@storybook/nextjs';
import {InquiryItem} from '@/components/support/inquiry/InquiryItem';
import {INQUIRY_STATUS} from '@/constants/inquiry';

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
    id: 1,
    title: '아이디어 보호/블록체인 관련 문의',
    description:
      '아이디어 등록 시 해시값 생성 오류가 납니다. 어떻게 해야 하자요입니다 이거 어떻게 해결가능한가요',
    status: INQUIRY_STATUS.CONFIRMING,
  },
};

export const Conpleted: Story = {
  args: {
    id: 2,
    title: '공모전/대외활동 연계 지원',
    description: '공모전 정보가 최신화되지 않아요.',
    status: INQUIRY_STATUS.COMPLETED,
  },
};

export const Received: Story = {
  args: {
    id: 3,
    title: '수정 관련 문의',
    description:
      '아이디어 등록 시 해시값 생성 오류가 납니다. 어떻게 해야 하자요입니다 이거 어떻게 해결가능한가요',
    status: INQUIRY_STATUS.RECEIVED,
  },
};
