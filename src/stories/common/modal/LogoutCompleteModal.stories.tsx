import {LogoutCompleteModal} from '@/components/common/modal/LogoutCompleteModal';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof LogoutCompleteModal> = {
  title: 'Components/Common/Modal/Logout Complete Modal',
  tags: ['autodocs'],
  component: LogoutCompleteModal,
  parameters: {
    docs: {
      description: {
        component: `로그아웃이 완료되었음을 사용자에게 알려주는 모달입니다.`,
      },
    },
    nextjs: {appDirectory: true},
  },
};

export default meta;
type Story = StoryObj<typeof LogoutCompleteModal>;

export const Default: Story = {
  render: () => (
    <ModalWrapper isOpen={true}>
      <LogoutCompleteModal />
    </ModalWrapper>
  ),
};
