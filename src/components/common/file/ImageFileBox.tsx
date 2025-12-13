import {FileBoxType} from '@/schemas/support';
import Image from 'next/image';
import {useRef} from 'react';

interface ImageFileBoxProps {
  box: FileBoxType;
  onFilesChange: (id: string, files: File[]) => void;
  disabled?: boolean;
}

export const ImageFileBox = ({
  box,
  onFilesChange,
  disabled,
}: ImageFileBoxProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (disabled) return;
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith('image/')
    );
    onFilesChange(box.id, droppedFiles);
  };

  const handleClick = () => {
    if (disabled) return;
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).filter((f) =>
        f.type.startsWith('image/')
      );
      onFilesChange(box.id, newFiles);
    }
  };

  return (
    <div
      className='border-primary flex h-[317px] w-[564px] cursor-pointer flex-wrap items-center justify-center gap-2 overflow-hidden rounded-[8px] border border-dashed'
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={handleClick}>
      <input
        type='file'
        accept='image/*'
        ref={fileInputRef}
        className='hidden'
        onChange={handleChange}
      />

      {box.files.length === 0 && (
        <div className='text-center text-xl font-medium'>
          <p>이미지 파일을 선택하거나</p>
          <p>여기로 끌어다 놓으세요</p>
        </div>
      )}

      {box.files.slice(0, 4).map((file, idx) => (
        <Image
          key={idx}
          src={URL.createObjectURL(file)}
          alt={`preview-${idx}`}
          className='h-full w-full object-cover'
          width={282}
          height={158}
        />
      ))}
    </div>
  );
};
