import {IdeaAgreementModal} from '@/components/common/modal/IdeaAgreementModal';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof IdeaAgreementModal> = {
  title: 'Components/Modal/Idea Agreement Modal',
  tags: ['autodocs'],
  component: IdeaAgreementModal,
  parameters: {
    docs: {
      description: {
        component: `아이디어 업로드 전, 사용자가 필수 동의 항목을 모두 확인했는지 안내하고 
해당 내용에 대한 최종 동의를 받기 위한 모달 컴포넌트입니다. 
각 조항을 사용자에게 명확히 전달하고, '확인 후 업로드'를 통해 제출 절차를 완료하도록 돕습니다. `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IdeaAgreementModal>;

export const Default: Story = {
  render: () => (
    <ModalWrapper isOpen={true}>
      <IdeaAgreementModal
        onClose={() => alert('닫기 클릭')}
        onConfirm={() => alert('확인 후 업로드 클릭')}
      />
    </ModalWrapper>
  ),
};
