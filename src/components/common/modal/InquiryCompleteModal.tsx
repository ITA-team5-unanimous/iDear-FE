import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';

interface InquiryCompleteModalProps {
  onClose: () => void;
}

export const InquiryCompleteModal = ({onClose}: InquiryCompleteModalProps) => {
  return (
    <div className='flex h-[260px] w-[450px] flex-col items-center justify-center gap-6 rounded-[8px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
      <span className='text-2xl font-bold'>접수 완료!</span>
      <div className='flex flex-col text-center'>
        <span className='text-xl font-medium' id='modal-header'>
          문의가 제출되었어요!
        </span>
        <span className='text-xl font-medium' id='modal-description'>
          확인 후 최대한 빠르게 도와드릴게요.
        </span>
      </div>

      <GlobalSmallButton text='확인' onClick={onClose} variant='wide' />
    </div>
  );
};
