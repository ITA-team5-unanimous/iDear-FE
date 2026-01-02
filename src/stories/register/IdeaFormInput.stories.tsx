import {Meta, StoryObj} from '@storybook/nextjs';
import {IdeaFormInput} from '@/app/register/[id]/_components/IdeaFormInput';

const meta: Meta<typeof IdeaFormInput> = {
  title: 'Components/Register/Idea Form Input',
  component: IdeaFormInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '아이디어 등록페이지에서 사용되는 입력 필드 컴포넌트입니다.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof IdeaFormInput>;

export const Default: Story = {
  args: {
    label: '아이디어 제목',
    value: '초기값',
    onChange: () => {},
  },
};
