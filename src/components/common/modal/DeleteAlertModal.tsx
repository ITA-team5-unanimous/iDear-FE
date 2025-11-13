import {ContinueWritingButton} from '@/components/buttons/ContinueWritingButton';
import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';

export const DeleteAlertModal = () => {
  const handleClickContinueButton = () => {
    alert('계속 작성하기 클릭!');
  };
  const handleClickConfirmButton = () => {
    alert('확인 클릭!');
  };

  return (
    <div
      className='flex h-[260px] w-[450px] flex-col items-center justify-center gap-6 rounded-[8px] bg-white'
      style={{
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      }}>
      <span className='text-center text-2xl font-bold'>
        정말 삭제하시겠습니까?
      </span>
      <span className='text-center text-xl font-medium'>
        한 번 삭제하면 다시 되돌릴 수 없어요.
      </span>
      <div className='mt-3 flex flex-row gap-6'>
        <ContinueWritingButton
          text='계속 작성하기'
          onClick={handleClickContinueButton}
          data-auto-focus
        />
        <GlobalSmallButton
          text='확인'
          onClick={handleClickConfirmButton}
          variant='wide'
        />
      </div>
    </div>
  );
};
