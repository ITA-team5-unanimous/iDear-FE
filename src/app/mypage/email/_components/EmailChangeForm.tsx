'use client';

import GlobalButton from '@/components/buttons/GlobalButton';
import {ROUTES} from '@/constants/routes';
import {
  useChangeEmail,
  useSendEmailVerification,
  useVerifyEmailCode,
} from '@/hooks/mutations/useEmail';
import {useUserStore} from '@/hooks/stores/useUserStore';
import {clearAuthCookies} from '@/utils/auth/cookies';
import {AxiosError} from 'axios';
import clsx from 'clsx';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';

export const EmailChangeForm = () => {
  const currentEmail = useUserStore((state) => state.email);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isCodeRequested, setIsCodeRequested] = useState<boolean>(false);
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [timer, setTimer] = useState<number>(180);

  const {mutate: sendVerification} = useSendEmailVerification();
  const {mutate: verifyCode} = useVerifyEmailCode();
  const {mutate: changeEmail} = useChangeEmail();

  const isEmailValid = isValidEmail(email);

  useEffect(() => {
    if (!isCodeRequested) return;
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isCodeRequested, timer]);

  const handleRequestCode = () => {
    sendVerification(
      {email},
      {
        onSuccess: () => {
          setIsCodeRequested(true);
          setTimer(180);
          alert('인증번호를 발송했어요.');
        },
        onError: (err: unknown) => {
          const message =
            err instanceof AxiosError
              ? err.response?.data?.message
              : '인증 요청 실패';
          alert(message);
        },
      }
    );
  };

  const handleVerifyCode = () => {
    verifyCode(
      {email, code: verificationCode},
      {
        onSuccess: () => {
          changeEmail(
            {email},
            {
              onSuccess: () => {
                alert('이메일 변경이 완료됐어요.');
                clearAuthCookies();
                router.push(ROUTES.AUTH);
              },
              onError: (err: unknown) => {
                const message =
                  err instanceof AxiosError
                    ? err.response?.data?.message
                    : '이메일 변경 실패';
                alert(message);
              },
            }
          );
        },
        onError: (err: unknown) => {
          const message =
            err instanceof AxiosError
              ? err.response?.data?.message
              : '인증번호가 올바르지 않아요.';
          alert(message);
        },
      }
    );
  };

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-3'>
        <span className='text-gray text-xl'>현재 이메일</span>
        <span className='text-xl'>{currentEmail}</span>
      </div>

      <div className='flex flex-col gap-4'>
        <div
          className={clsx(
            'text-gray flex justify-between rounded-[8px] border px-6 py-5 text-xl font-medium',
            !isEmailValid && 'border-primary border-[2px]'
          )}>
          <input
            type='email'
            placeholder='새 이메일'
            className='placeholder:text-gray flex-1 outline-none'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {isEmailValid && (
            <button
              onClick={handleRequestCode}
              className='text-primary text-xl font-medium'>
              {isCodeRequested ? '다시 보내기' : '인증 요청'}
            </button>
          )}
        </div>

        {email && !isEmailValid && (
          <p className='text-primary text-xl font-medium'>
            이메일 주소가 올바르지 않아요.
          </p>
        )}
      </div>

      {/* 인증번호 입력 영역 */}
      {isCodeRequested && (
        <div className='flex flex-col gap-4'>
          <p className='text-gray text-xl font-medium'>
            인증번호 발송을 요청했습니다. 인증번호를 받지 못하셨다면, 이메일
            주소를 다시 확인해주세요.
          </p>

          <div className='border-gray flex justify-between rounded-[8px] border px-6 py-5 font-medium'>
            <input
              type='text'
              placeholder='인증번호'
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className='placeholder:text-gray text-xl outline-none'
            />
            <span className='text-primary text-xl'>
              {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
            </span>
          </div>

          <p className='text-primary text-xl font-medium'>
            인증번호는 3분 이내 입력해야 합니다. 제한시간이 지났을 경우
            인증번호를 다시 받아 주세요.
          </p>
          <div className='mt-6 flex w-full justify-center'>
            <GlobalButton
              text='인증하기'
              onClick={handleVerifyCode}
              disabled={!verificationCode || timer === 0}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email: string) => EMAIL_REGEX.test(email);
