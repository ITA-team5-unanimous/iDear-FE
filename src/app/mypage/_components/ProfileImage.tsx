'use client';

import {useRef, useState, useEffect} from 'react';
import DefaultImage from '@/assets/default/default-image.svg?url';
import Image from 'next/image';
import GlobalButton from '@/components/buttons/GlobalButton';
import {useUserStore} from '@/hooks/stores/useUserStore';
import {useUploadProfileImage} from '@/hooks/queries/useUser';
import {Spinner} from '@/components/common/ui/Spinner';

export const ProfileImage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const profileImageUrl = useUserStore((state) => state.profileImageUrl);

  const {mutate: uploadProfileImage, isPending} = useUploadProfileImage();

  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if (preview && preview.startsWith('blob:')) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleEditModeChange = () => {
    if (isPending) return;
    setIsEditMode(true);
  };

  const handleClickCancel = () => {
    if (isPending) return;
    setPreview(null);
    setSelectedFile(null);
    setIsEditMode(false);
  };

  const handleClickSave = () => {
    if (!selectedFile || isPending) return;

    uploadProfileImage(selectedFile, {
      onSuccess: () => {
        setPreview(null);
        setSelectedFile(null);
        setIsEditMode(false);
      },
    });
  };

  const handleImageOpen = () => {
    if (isPending) return;
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isPending) return;
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);
    setSelectedFile(file);

    e.target.value = '';
  };

  const imageSrc = preview ?? profileImageUrl ?? DefaultImage;

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
        {isPending && (
          <div className='absolute inset-0 flex items-center justify-center bg-black/40'>
            <Spinner />
          </div>
        )}
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
