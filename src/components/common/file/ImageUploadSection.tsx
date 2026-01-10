'use client';

import {useRef} from 'react';
import {v4 as uuidv4} from 'uuid';
import {FileBoxType} from '@/schemas/support';
import {FileBox} from '@/components/common/file/FileBox';

const MAX_IMAGE_COUNT = 4;

interface ImageUploadSectionProps {
  images: FileBoxType[];
  setImages: React.Dispatch<React.SetStateAction<FileBoxType[]>>;
}

export const ImageUploadSection = ({
  images,
  setImages,
}: ImageUploadSectionProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClickAdd = () => {
    if (images.length >= MAX_IMAGE_COUNT) return;
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);

    setImages((prev) => {
      const remain = MAX_IMAGE_COUNT - prev.length;
      const nextFiles = selectedFiles.slice(0, remain);

      return [
        ...prev,
        ...nextFiles.map((file) => ({
          id: uuidv4(),
          files: [file],
        })),
      ];
    });

    e.target.value = '';
  };

  return (
    <div className={'flex flex-col gap-6'}>
      {images.map((box) => (
        <FileBox key={box.id} icon='image' file={box.files[0]} />
      ))}

      {images.length < MAX_IMAGE_COUNT && (
        <FileBox icon='image' text='이미지 추가' onClick={handleClickAdd} />
      )}

      <input
        type='file'
        accept='image/*'
        ref={fileInputRef}
        multiple
        className='hidden'
        onChange={handleChange}
      />
    </div>
  );
};
