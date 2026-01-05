import {Meta, StoryObj} from '@storybook/nextjs';
import {AlarmContainer} from '@/components/alarm/AlarmContainer';

const meta: Meta<typeof AlarmContainer> = {
  title: 'Components/Alarm/Alarm Container',
  component: AlarmContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '알림 버튼 클릭 시 표시되는 드롭다운 알림 컨테이너입니다. 외부 클릭 시 닫히고, framer-motion으로 부드럽게 열립니다. 스크롤 형식으로 확인할 수 있습니다.',
      },
    },
    nextjs: {appDirectory: true},
  },
};

export default meta;
type Story = StoryObj<typeof AlarmContainer>;

export const Default: Story = {
  render: () => <AlarmContainer />,
};
