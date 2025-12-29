import {GlobalAlertModal} from '@/components/common/modal/GlobalAlertModal';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof GlobalAlertModal> = {
  title: 'Components/Common/Modal/Global Alert Modal',
  tags: ['autodocs'],
  component: GlobalAlertModal,
  parameters: {
    docs: {
      description: {
        component: `페이지 전반에서 쓰이는 글로벌 경고 모달입니다. strong text, content(세부 설명), onClose, onContinue, withdrawText를 props로 받아 렌더링합니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlobalAlertModal>;

export const Default: Story = {
  render: () => (
    <ModalWrapper isOpen={true}>
      <GlobalAlertModal
        strongText='정말 삭제하시겠습니까?'
        content='한 번 삭제하면 다시 되돌릴 수 없어요.'
        withdrawText='계속 작성하기'
        onContinue={() => {
          alert('계속 작성하기 클릭');
        }}
        onClose={() => alert('확인 클릭')}
      />
    </ModalWrapper>
  ),
};
