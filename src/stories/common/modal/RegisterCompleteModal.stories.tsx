import {RegisterCompleteModal} from '@/components/common/modal/RegisterCompleteModal';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof RegisterCompleteModal> = {
  title: 'Components/Common/Modal/Register Complete Modal',
  tags: ['autodocs'],
  component: RegisterCompleteModal,
  parameters: {
    docs: {
      description: {
        component: `아이디어 등록이 완료되었음을 사용자에게 알려주는 모달입니다. `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RegisterCompleteModal>;

export const Default: Story = {
  render: () => (
    <ModalWrapper isOpen={true}>
      <RegisterCompleteModal
        onClose={() => {
          alert('확인 클릭');
        }}
      />
    </ModalWrapper>
  ),
};
