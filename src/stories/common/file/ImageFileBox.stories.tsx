import {Meta, StoryObj} from '@storybook/nextjs';

import {useState} from 'react';
import {FileBoxType} from '@/schemas/support';
import {ImageFileBox} from '@/components/common/file/ImageFileBox';

const meta: Meta<typeof ImageFileBox> = {
  title: 'Components/Common/File/Image File Box',
  component: ImageFileBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `이미지 파일 업로드/드래그 앤 드롭과 이미지 프리뷰를 확인할 수 있는 이미지 파일 박스 컴포넌트입니다. `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImageFileBox>;

export const Default: Story = {
  render: () => {
    const [box, setBox] = useState<FileBoxType>({
      id: 1,
      files: [],
    });

    const handleFilesChange = (id: number, files: File[]) => {
      setBox((prev) => ({...prev, files}));
    };

    return <ImageFileBox box={box} onFilesChange={handleFilesChange} />;
  },
};
