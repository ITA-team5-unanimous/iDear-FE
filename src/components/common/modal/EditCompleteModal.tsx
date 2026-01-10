import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';
import {useEffect, useState} from 'react';

interface EditCompleteModalProps {
  onClose: () => void;
  isFileChanged: boolean;
}

export const EditCompleteModal = ({
  onClose,
  isFileChanged,
}: EditCompleteModalProps) => {
  const [isSaving, setIsSaving] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSaving(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='flex h-[260px] w-[450px] flex-col items-center justify-center rounded-[8px] bg-white text-center shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
      {isFileChanged ? (
        <>
          <span className='text-xl font-medium' id='modal-header'>
            새로운 버전이 생성되었습니다.
          </span>
          <span className='mt-4 text-base font-medium' id='modal-description'>
            문서 변경 내용이 블록체인에 안전하게 기록되었습니다.
          </span>
        </>
      ) : (
        <>
          <span className='text-xl font-medium'>수정이 완료되었습니다.</span>
          <span className='mt-4 text-base font-medium' id='modal-description'>
            이번 수정은 문서 변경이 없어
            <br />
            새로운 버전이 생성되지 않았습니다.
          </span>
        </>
      )}
      <div className='mt-6'>
        <button className='sr-only' tabIndex={0} aria-hidden='true' />

        <GlobalSmallButton
          text='확인'
          onClick={onClose}
          variant='wide'
          disabled={isSaving}
        />
      </div>
    </div>
  );
};
