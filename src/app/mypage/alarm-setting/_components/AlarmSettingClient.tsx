'use client';

import {useState} from 'react';
import RedCheckBox from '@/assets/idea/checkbox-red.svg';
import GrayCheckBox from '@/assets/idea/checkbox-gray.svg';
import GlobalButton from '@/components/buttons/GlobalButton';
import {useRouter} from 'next/navigation';
import {useUpdateNotificationSettings} from '@/hooks/mutations/useNotification';

export const AlarmSettingClient = () => {
  const router = useRouter();
  const [isCheckedPush, setIsCheckedPush] = useState<boolean>(false);
  const [isCheckedEmail, setIsCheckedEmail] = useState<boolean>(false);
  const {mutate: updateSettings, isPending} = useUpdateNotificationSettings();

  const handleSave = () => {
    updateSettings(
      {
        push: isCheckedPush,
        email: isCheckedEmail,
      },
      {
        onSuccess: () => {
          alert('알림 저장에 성공했습니다.');
          router.back();
        },
        onError: () => {
          alert('알림 설정 저장에 실패했어요.');
        },
      }
    );
  };

  const handleRemove = () => {
    router.back();
  };

  return (
    <div className='flex flex-col gap-12'>
      <div className='flex flex-col gap-12'>
        <strong className='text-2xl font-bold'>푸시 (App/Web)</strong>
        <div className='flex flex-row gap-6'>
          <button
            type='button'
            onClick={() => setIsCheckedPush((prev) => !prev)}
            className='flex items-start'>
            {isCheckedPush ? <RedCheckBox /> : <GrayCheckBox />}
          </button>

          <div className='flex flex-col gap-3 text-xl font-normal'>
            <p className='font-medium'>중요 공지</p>
            <p>아카이빙 완료 및 블록 체인 등록 결과 등 푸시 알림으로 안내</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-12'>
        <strong className='text-2xl font-bold'>이메일/SMS</strong>
        <div className='flex flex-row gap-6'>
          <button
            type='button'
            onClick={() => setIsCheckedEmail((prev) => !prev)}
            className='flex items-start'>
            {isCheckedEmail ? <RedCheckBox /> : <GrayCheckBox />}
          </button>
          <div className='flex flex-col gap-3 text-xl font-normal'>
            <p className='font-medium'>이메일</p>
            <p>아카이빙 완료 및 블록 체인 등록 결과 등 이메일로 안내</p>
          </div>
        </div>
      </div>
      <div className='flex w-full flex-row justify-center gap-6'>
        <GlobalButton text='취소하기' variant='gray' onClick={handleRemove} />
        <GlobalButton
          text='저장하기'
          onClick={handleSave}
          disabled={isPending}
        />
      </div>
    </div>
  );
};
