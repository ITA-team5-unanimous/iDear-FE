'use client';

import {useRef, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import {FileBox} from '@/app/register/[id]/_components/file/FileBox';
import {FileBoxType} from '@/schemas/support';

const MAX_IMAGE_COUNT = 4;

export const ImageUploadSection = () => {
  const [fileBoxes, setFileBoxes] = useState<FileBoxType[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClickAdd = () => {
    if (fileBoxes.length >= MAX_IMAGE_COUNT) return;
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);

    setFileBoxes((prev) => {
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
      <p className='text-2xl font-bold'>
        이미지 파일(최대 {MAX_IMAGE_COUNT}장)
      </p>

      {fileBoxes.map((box) => (
        <FileBox key={box.id} icon='image' file={box.files[0]} />
      ))}

      {fileBoxes.length < MAX_IMAGE_COUNT && (
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
