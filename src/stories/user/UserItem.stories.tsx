import {Meta, StoryObj} from '@storybook/nextjs';
import {UserItem} from '@/components/user/UserItem';

const meta: Meta<typeof UserItem> = {
  title: 'Components/User/User Item',
  component: UserItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `사용자 드롭다운 메뉴 내 개별 버튼 컴포넌트입니다.`,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: 'text',
      description: '버튼 텍스트',
    },
    onClick: {action: 'clicked', description: '버튼 클릭 이벤트'},
  },
};

export default meta;
type Story = StoryObj<typeof UserItem>;

export const Default: Story = {
  args: {
    text: '공지사항',
    onClick: () => {},
  },
  render: (args) => (
    <div className='w-[221px]'>
      <UserItem {...args} />
    </div>
  ),
};
