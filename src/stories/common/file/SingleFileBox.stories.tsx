import type {Meta, StoryObj} from '@storybook/nextjs';
import {SingleFileBox} from '@/components/common/file/SingleFileBox';
import {FileBoxType} from '@/schemas/support';
import {useState} from 'react';

const meta: Meta<typeof SingleFileBox> = {
  title: 'Components/Common/File/Single File Box',
  component: SingleFileBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `파일 업로드/드래그 앤 드롭과 파일 프리뷰를 확인할 수 있는 파일 박스 컴포넌트입니다. `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SingleFileBox>;

export const Default: Story = {
  render: () => {
    const [box, setBox] = useState<FileBoxType>({
      id: '1',
      files: [],
    });

    const handleFilesChange = (id: string, file: File | null) => {
      setBox((prev) => ({...prev, files: file ? [file] : []}));
    };

    return <SingleFileBox box={box} onFilesChange={handleFilesChange} />;
  },
};
