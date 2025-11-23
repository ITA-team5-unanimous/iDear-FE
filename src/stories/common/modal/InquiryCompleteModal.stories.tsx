import {InquiryCompleteModal} from '@/components/common/modal/InquiryCompleteModal';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof InquiryCompleteModal> = {
  title: 'Components/Common/Modal/Inquiry Complete Modal',
  tags: ['autodocs'],
  component: InquiryCompleteModal,
  parameters: {
    docs: {
      description: {
        component: `문의사항 접수가 완료되었음을 사용자에게 알려 주는 모달입니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InquiryCompleteModal>;

export const Default: Story = {
  render: () => (
    <ModalWrapper isOpen={true}>
      <InquiryCompleteModal onClose={() => alert('확인 클릭')} />
    </ModalWrapper>
  ),
};
