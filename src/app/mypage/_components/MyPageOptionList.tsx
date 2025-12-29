'use client';

import {MyPageOption} from '@/app/mypage/_components/MyPageOption';
import {ROUTES} from '@/constants/routes';
import {useRouter} from 'next/navigation';

export const MyPageOptionList = () => {
  const router = useRouter();

  const handleClickEmail = () => {
    router.push(ROUTES.MYPAGE_EMAIL);
  };
  const handleClickSetting = () => {};
  const handleClickWithdraw = () => {};

  return (
    <>
      <MyPageOption
        title='계정'
        text='이메일 변경'
        onClick={handleClickEmail}
      />

      <MyPageOption
        title='설정'
        text='알림 채널 설정'
        onClick={handleClickSetting}
      />

      <MyPageOption
        title='회원 탈퇴'
        text='탈퇴하기'
        onClick={handleClickWithdraw}
      />
    </>
  );
};
