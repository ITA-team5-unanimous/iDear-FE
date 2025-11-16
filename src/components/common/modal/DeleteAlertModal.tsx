import {ContinueWritingButton} from '@/components/buttons/ContinueWritingButton';
import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';

interface DeleteAlertModalProps {
  onClose: () => void;
  onContinue: () => void;
}

export const DeleteAlertModal = ({
  onClose,
  onContinue,
}: DeleteAlertModalProps) => {
  return (
    <div
      className='flex h-[260px] w-[450px] flex-col items-center justify-center gap-6 rounded-[8px] bg-white'
      style={{
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      }}>
      <span id='modal-header' className='text-center text-2xl font-bold'>
        정말 삭제하시겠습니까?
      </span>
      <span className='text-center text-xl font-medium' id='modal-description'>
        한 번 삭제하면 다시 되돌릴 수 없어요.
      </span>
      <div className='mt-3 flex flex-row gap-6'>
        <ContinueWritingButton
          text='계속 작성하기'
          onClick={onContinue}
          data-auto-focus
        />
        <GlobalSmallButton text='확인' onClick={onClose} variant='wide' />
      </div>
    </div>
  );
};
