'use client';

import {useState} from 'react';
import {FileBox} from '@/app/register/[id]/_components/file/FileBox';
import {UrlAttachModal} from '@/app/register/[id]/_components/file/UrlAttachModal';

interface UrlUploadSectionProps {
  githubUrl: string | undefined;
  setGithubUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
  figmaUrl: string | undefined;
  setFigmaUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const UrlUploadSection = ({
  githubUrl,
  setGithubUrl,
  figmaUrl,
  setFigmaUrl,
}: UrlUploadSectionProps) => {
  const [activeType, setActiveType] = useState<'github' | 'figma' | null>(null);

  const handleConfirmUrl = (value: string) => {
    if (activeType === 'github') setGithubUrl(value);
    if (activeType === 'figma') setFigmaUrl(value);

    setActiveType(null);
  };

  return (
    <>
      <div className='flex flex-col gap-6'>
        <div className='relative'>
          <FileBox
            onClick={() =>
              setActiveType(activeType === 'github' ? null : 'github')
            }
            icon='github'
            text='깃허브 임베드'
            selectedUrl={githubUrl}
          />
          {activeType === 'github' && (
            <div className='absolute top-[calc(100%+24px)] left-1/2 z-50 -translate-x-1/2'>
              <UrlAttachModal onConfirm={handleConfirmUrl} />
            </div>
          )}
        </div>

        <div className='relative'>
          <FileBox
            onClick={() =>
              setActiveType(activeType === 'figma' ? null : 'figma')
            }
            icon='figma'
            text='피그마 임베드'
            selectedUrl={figmaUrl}
          />
          {activeType === 'figma' && (
            <div className='absolute top-[calc(100%+24px)] left-1/2 z-50 -translate-x-1/2'>
              <UrlAttachModal onConfirm={handleConfirmUrl} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
