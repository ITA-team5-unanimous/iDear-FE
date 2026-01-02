'use client';

import {useRef, useState, useEffect} from 'react';
import DefaultImage from '@/assets/default/default-image.svg?url';
import Image from 'next/image';
import GlobalButton from '@/components/buttons/GlobalButton';

export const ProfileImage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [savedImage, setSavedImage] = useState<string | null>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if (preview && preview.startsWith('blob:')) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleClickCancel = () => {
    setPreview(savedImage);
    setIsEditMode(false);
  };

  const handleClickSave = () => {
    setSavedImage(preview);
    setIsEditMode(false);
  };

  const handleEditModeChange = () => {
    setIsEditMode(true);
  };

  const handleImageOpen = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
    e.target.value = '';
  };

  const imageSrc = preview ?? savedImage ?? DefaultImage;

  return (
    <div className='flex flex-col items-center gap-12'>
      <div
        className='relative h-63 w-63 cursor-pointer overflow-hidden rounded-full'
        onClick={isEditMode ? handleImageOpen : undefined}>
        <Image
          src={imageSrc}
          alt='프로필 이미지'
          fill
          className='object-cover'
        />
      </div>

      <div>
        {isEditMode ? (
          <div className='flex gap-6'>
            <GlobalButton
              aria-label='취소하기 버튼'
              text='취소하기'
              variant='gray'
              onClick={handleClickCancel}
            />
            <GlobalButton
              aria-label='저장하기 버튼'
              text='저장하기'
              onClick={handleClickSave}
            />
          </div>
        ) : (
          <GlobalButton
            aria-label='이미지 변경하기 버튼'
            text='이미지 변경하기'
            onClick={handleEditModeChange}
          />
        )}
      </div>

      <input
        ref={fileInputRef}
        type='file'
        accept='image/*'
        className='hidden'
        onChange={handleImageChange}
      />
    </div>
  );
};
