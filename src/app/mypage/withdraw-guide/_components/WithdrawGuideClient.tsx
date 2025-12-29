'use client';

import GlobalButton from '@/components/buttons/GlobalButton';
import {GlobalAlertModal} from '@/components/common/modal/GlobalAlertModal';

import {ModalWrapper} from '@/components/common/wrappers/ModalWrapper';
import {ROUTES} from '@/constants/routes';
import {deleteUser} from '@/services/api/user/userApi';
import {clearAuthCookies} from '@/utils/auth/cookies';
import {useRouter} from 'next/navigation';
import {useState} from 'react';

export const WithdrawGuideClient = () => {
  const router = useRouter();
  const [isWithdrawClick, setIsWithdrawClick] = useState<boolean>(false);

  const handleRemove = () => {
    router.back();
  };

  const handleWithdraw = () => {
    setIsWithdrawClick(true);
  };

  const handleConfirmWithdraw = async () => {
    try {
      await deleteUser();
      clearAuthCookies();
      router.replace(ROUTES.AUTH);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className='flex w-full flex-row justify-center gap-6'>
        <GlobalButton text='취소하기' variant='gray' onClick={handleRemove} />
        <GlobalButton text='탈퇴하기' onClick={handleWithdraw} />
      </div>
      {isWithdrawClick ? (
        <ModalWrapper
          isOpen={isWithdrawClick}
          onClose={() => setIsWithdrawClick(false)}>
          <GlobalAlertModal
            content='계정의 모든 정보는 삭제되며 복구되지 않습니다.'
            strongText='정말 탈퇴하시겠습니까?'
            withdrawText='취소하기'
            onContinue={() => setIsWithdrawClick(false)}
            onClose={handleConfirmWithdraw}
          />
        </ModalWrapper>
      ) : (
        ''
      )}
    </>
  );
};
