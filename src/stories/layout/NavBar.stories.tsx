import {NavBar} from '@/components/layout/NavBar';
import {Meta, StoryObj} from '@storybook/nextjs';

const meta: Meta<typeof NavBar> = {
  title: 'Components/Layout/Nav Bar',
  component: NavBar,
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    docs: {
      description: {
        component: `
사이트 상단의 글로벌 내비게이션 바(GNB) 역할을 수행하는 NavBar 컴포넌트입니다. 
- 로고 클릭 시 메인 페이지로 이동
- 공모전 / 나의 아이디어 메뉴 제공
- 알림 및 사용자 메뉴 버튼 제공
- 알림 / 사용자 메뉴 클릭 시 드롭다운 표시
- 메뉴 외부 클릭 시 드롭다운 닫힘 기능 지원`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className='w-screen'>
      <NavBar />
    </div>
  ),
};
