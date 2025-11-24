import {Meta, StoryObj} from '@storybook/nextjs';
import {UserContainer} from '@/components/user/UserContainer';

const meta: Meta<typeof UserContainer> = {
  title: 'Components/User/User Container',
  component: UserContainer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `사용자 메뉴 드롭다운 컨테이너입니다. 공지사항, 고객센터, 로그아웃 버튼을 포함하며 외부 클릭 시 자동으로 닫힙니다.`,
      },
    },
    layout: 'centered',
    nextjs: {appDirectory: true},
  },
};

export default meta;
type Story = StoryObj<typeof UserContainer>;

export const Default: Story = {
  render: () => <UserContainer />,
};
