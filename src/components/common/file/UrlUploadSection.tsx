'use client';

import {useState} from 'react';
import {FileBox} from '@/components/common/file/FileBox';
import {UrlAttachModal} from '@/components/common/file/UrlAttachModal';

interface UrlUploadSectionProps {
  type: 'github' | 'figma';
  url?: string;
  setUrl: (url: string | null) => void;
}

export const UrlUploadSection = ({
  type,
  url,
  setUrl,
}: UrlUploadSectionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleConfirmUrl = (value: string) => {
    setUrl(value);
    setIsOpen(false);
  };

  const textMap = {
    github: '깃허브 임베드',
    figma: '피그마 임베드',
  };

  return (
    <div className='relative'>
      <FileBox
        onClick={() => setIsOpen((prev) => !prev)}
        icon={type}
        text={textMap[type]}
        selectedUrl={url}
      />

      {isOpen && (
        <div className='absolute top-[calc(100%+24px)] left-1/2 z-50 -translate-x-1/2'>
          <UrlAttachModal onConfirm={handleConfirmUrl} />
        </div>
      )}
    </div>
  );
};
