import {DeleteAlertModal} from '@/components/common/modal/DeleteAlertModal';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof DeleteAlertModal> = {
  title: 'Components/Modal/Delete Alert Modal',
  tags: ['autodocs'],
  component: DeleteAlertModal,
  parameters: {
    docs: {
      description: {
        component: `아이디어 기록함에서 사용자가 삭제하기 버튼을 눌렀을 때 나타나는 모달입니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DeleteAlertModal>;

export const Default: Story = {
  render: () => (
    <ModalWrapper isOpen={true}>
      <DeleteAlertModal />
    </ModalWrapper>
  ),
};
