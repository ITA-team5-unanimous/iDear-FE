import {ContinueWritingButton} from '@/components/buttons/ContinueWritingButton';
import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';

interface IdeaExitModalProps {
  onExit: () => void;
  onContinue: () => void;
}

export const IdeaExitModal = ({onExit, onContinue}: IdeaExitModalProps) => {
  return (
    <div
      className='flex h-[260px] w-[450px] flex-col items-center justify-center gap-9 rounded-[8px] bg-white'
      style={{
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      }}>
      <div className='flex flex-col text-center'>
        <span className='text-2xl font-medium' id='modal-header'>
          지금까지의 아이디어가 사라질 수 있어요.
        </span>
        <span className='text-2xl font-medium' id='modal-description'>
          그래도 나가시겠어요?
        </span>
      </div>
      <div className='flex gap-4'>
        <ContinueWritingButton
          text='계속 작성하기'
          onClick={onContinue}
          data-auto-focus
        />
        <GlobalSmallButton text='나가기' onClick={onExit} />
      </div>
    </div>
  );
};
