import {Meta, StoryObj} from '@storybook/nextjs';
import {AlarmItem} from '@/components/alarm/AlarmItem';

const meta: Meta<typeof AlarmItem> = {
  title: 'Components/Alarm/Alarm Item',
  component: AlarmItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `알림 리스트에서 개별 알림을 보여주는 컴포넌트입니다.`,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    date: {
      control: 'text',
      description: '알림 날짜',
    },
    onDelete: {action: 'deleteClicked', description: '알림 삭제 버튼 클릭'},
  },
};

export default meta;
type Story = StoryObj<typeof AlarmItem>;

export const Default: Story = {
  args: {
    date: '2025-11-16',
    content: '아이디어가 등록되었습니다. 내용이 맞는지 확인해주세요.',
    onDelete: () => {},
  },
  render: (args) => (
    <div className='w-[349px]'>
      <AlarmItem {...args} />
    </div>
  ),
};
