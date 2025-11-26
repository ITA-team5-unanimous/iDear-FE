import {FileBoxType} from '@/schemas/support';
import {useRef} from 'react';

interface SingleFileBoxProps {
  box: FileBoxType;
  onFilesChange: (id: number, file: File | null) => void;
}

export const SingleFileBox = ({box, onFilesChange}: SingleFileBoxProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      onFilesChange(box.id, droppedFile);
    }
  };

  const handleClick = () => fileInputRef.current?.click();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      onFilesChange(box.id, file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const file = box.files[0] || null;

  return (
    <div
      className='border-primary flex h-[317px] w-[564px] cursor-pointer flex-wrap items-center justify-center gap-2 overflow-hidden rounded-[8px] border border-dashed'
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={handleClick}>
      <input
        type='file'
        accept='.pdf,.doc,.docx,.zip,.hwp'
        ref={fileInputRef}
        className='hidden'
        onChange={handleChange}
      />
      {!file && (
        <div className='text-center text-xl font-medium'>
          <p>파일을 선택하거나</p>
          <p>여기로 끌어다 놓으세요</p>
        </div>
      )}
      {file && (
        <div className='flex h-full w-full flex-col items-center justify-center p-4 text-center'>
          <p className='max-w-full px-4 text-xl font-bold break-words text-gray-800'>
            {file.name}
          </p>
          <p className='mt-1 text-base text-gray-500'>
            ({(file.size / 1024 / 1024).toFixed(2)} MB)
          </p>
        </div>
      )}
    </div>
  );
};
