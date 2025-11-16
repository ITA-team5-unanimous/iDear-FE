import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';
import {useEffect, useState} from 'react';

interface RegisterCompleteModalProps {
  onClose: () => void;
}

export const RegisterCompleteModal = ({
  onClose,
}: RegisterCompleteModalProps) => {
  const [isSaving, setIsSaving] = useState<boolean>(true);
  /**
   * 아이디어 저장 중 로딩 표시 필요
   * (블록체인 저장 로딩 시간 체크 필요)
   * 저장 중에는 확인 버튼 disabled
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSaving(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className='flex h-[260px] w-[450px] flex-col items-center justify-center gap-6 rounded-[8px] bg-white'
      style={{
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      }}>
      <span className='text-2xl font-bold'>등록 완료!</span>
      <div className='flex flex-col text-center'>
        <span className='text-2xl font-medium' id='modal-header'>
          아이디어 저장 중입니다.
        </span>
        <span className='text-2xl font-medium' id='modal-description'>
          잠시만 기다려 주세요.
        </span>
      </div>

      <button className='sr-only' tabIndex={0} aria-hidden='true' />

      <GlobalSmallButton
        text='확인'
        onClick={onClose}
        variant='wide'
        disabled={isSaving}
      />
    </div>
  );
};
