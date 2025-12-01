import {Radio} from '@/components/common/radio/Radio';
import {Meta, StoryObj} from '@storybook/nextjs';
import {useState} from 'react';

const meta: Meta<typeof Radio> = {
  title: 'Components/Common/Radio',
  component: Radio,
  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        component: `단일 Radio 버튼 컴포넌트입니다.`,
      },
    },
  },
  argTypes: {
    label: {control: 'text'},
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;
export const Interactive: Story = {
  args: {
    label: 'Chrome',
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);

    return (
      <Radio
        {...args}
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
    );
  },
};
