import {ContinueWritingButton} from '@/components/buttons/ContinueWritingButton';
import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';

interface GlobalAlertModalProps {
  onClose: () => void;
  onContinue: () => void;
  strongText?: string;
  content?: string;
  withdrawText: string;
}

export const GlobalAlertModal = ({
  onClose,
  onContinue,
  strongText,
  content,
  withdrawText,
}: GlobalAlertModalProps) => {
  return (
    <div className='flex h-[260px] w-[450px] flex-col items-center justify-center gap-6 rounded-[8px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
      <span id='modal-header' className='text-center text-2xl font-bold'>
        {strongText}
      </span>
      <span className='text-center text-xl font-medium' id='modal-description'>
        {content}
      </span>
      <div className='mt-3 flex flex-row gap-6'>
        <ContinueWritingButton
          text={withdrawText}
          onClick={onContinue}
          data-auto-focus
        />
        <GlobalSmallButton text='확인' onClick={onClose} variant='wide' />
      </div>
    </div>
  );
};
