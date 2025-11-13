import {GlobalSmallButton} from '@/components/buttons/GlobalSmallButton';

export const RegisterCompleteModal = () => {
  const handleClickConfirmButton = () => {
    alert('아이디어 등록 완료 클릭!');
  };

  /**
   * 아이디어 저장 중 로딩 표시 필요
   * 저장 중에는 확인 버튼 disabled
   */
  return (
    <div
      className='flex h-[260px] w-[450px] flex-col items-center justify-center gap-6 rounded-[8px] bg-white'
      style={{
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      }}>
      <span className='text-2xl font-bold'>등록 완료!</span>
      <div className='flex flex-col text-center'>
        <span className='text-2xl font-medium'>아이디어 저장 중입니다.</span>
        <span className='text-2xl font-medium'>잠시만 기다려 주세요.</span>
      </div>

      <GlobalSmallButton
        text='확인'
        onClick={handleClickConfirmButton}
        variant='wide'
      />
    </div>
  );
};
