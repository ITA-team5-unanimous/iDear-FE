'use client';

import {useState} from 'react';
import {FileBox} from '@/app/register/[id]/_components/file/FileBox';
import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {UrlAttachModal} from '@/app/register/[id]/_components/file/UrlAttachModal';

export const UrlUploadSection = () => {
  const [isUrlModalOpen, setIsUrlModalOpen] = useState<boolean>(false);
  const [githubUrl, setGithubUrl] = useState<string | undefined>();
  const [figmaUrl, setFigmaUrl] = useState<string | undefined>();
  const [activeType, setActiveType] = useState<'github' | 'figma' | null>(null);

  const handleConfirmUrl = (value: string) => {
    if (activeType === 'github') setGithubUrl(value);
    if (activeType === 'figma') setFigmaUrl(value);

    setIsUrlModalOpen(false);
    setActiveType(null);
  };

  return (
    <>
      <div className='flex flex-col gap-6'>
        <FileBox
          onClick={() => {
            setActiveType('github');
            setIsUrlModalOpen(true);
          }}
          icon='github'
          text='깃허브 임베드'
          selectedUrl={githubUrl}
        />
        <FileBox
          onClick={() => {
            setActiveType('figma');
            setIsUrlModalOpen(true);
          }}
          icon='figma'
          text='피그마 임베드'
          selectedUrl={figmaUrl}
        />
      </div>

      {isUrlModalOpen && (
        <ModalWrapper
          isOpen={isUrlModalOpen}
          onClose={() => setIsUrlModalOpen(false)}>
          <UrlAttachModal onConfirm={handleConfirmUrl} />
        </ModalWrapper>
      )}
    </>
  );
};
