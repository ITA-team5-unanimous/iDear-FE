'use client';

import {useUserStore} from '@/hooks/stores/useUserStore';

export const EmailChangeForm = () => {
  const currentEmail = useUserStore((state) => state.email);
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-3'>
        <span className='text-gray text-xl'>현재 이메일</span>
        <span className='text-xl'>{currentEmail}</span>
      </div>

      <div className='flex flex-col gap-12'>
        {/* <NewEmailInput
          value={email}
          error={error}
          onChange={handleEmailChange}
        /> */}

        <div className='flex justify-center gap-6'>
          {/* <GlobalButton
            aria-label='취소하기 버튼'
            text='취소하기'
            variant='gray'
            onClick={handleClickCancel}
          />
          <GlobalButton
            aria-label='저장하기 버튼'
            text='저장하기'
            onClick={handleClickSave}
          /> */}
        </div>
      </div>
    </div>
  );
};
