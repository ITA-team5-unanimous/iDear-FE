import {IdeaExitModal} from '@/components/common/modal/IdeaExitModal';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof IdeaExitModal> = {
  title: 'Components/Common/Modal/Idea Exit Modal',
  tags: ['autodocs'],
  component: IdeaExitModal,
  parameters: {
    docs: {
      description: {
        component: `아이디어 등록 중 사용자가 취소하기 버튼을 눌렀을 때 나타나는 모달입니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IdeaExitModal>;

export const Default: Story = {
  render: () => (
    <ModalWrapper isOpen={true}>
      <IdeaExitModal />
    </ModalWrapper>
  ),
};
