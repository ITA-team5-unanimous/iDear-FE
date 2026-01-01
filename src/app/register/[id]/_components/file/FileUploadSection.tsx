'use client';

import {useRef} from 'react';
import {FileBox} from '@/app/register/[id]/_components/file/FileBox';

interface FileUploadSectionProps {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export const FileUploadSection = ({file, setFile}: FileUploadSectionProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClickAdd = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;

    setFile(e.target.files[0]);
    e.target.value = '';
  };

  return (
    <div className='flex flex-col gap-6'>
      <FileBox
        icon='file'
        text='파일 업로드 또는 임베드'
        file={file}
        onClick={handleClickAdd}
      />

      <input
        type='file'
        accept='.pdf,.doc,.docx,.zip,.hwp'
        ref={fileInputRef}
        className='hidden'
        onChange={handleChange}
      />
    </div>
  );
};
