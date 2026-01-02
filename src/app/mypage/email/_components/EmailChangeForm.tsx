'use client';

import {NewEmailInput} from '@/app/mypage/email/_components/NewEmailInput';
import GlobalButton from '@/components/buttons/GlobalButton';
import {useState, useEffect} from 'react';
import {getUsers} from '@/services/api/user/userApi';

export const EmailChangeForm = () => {
  const [currentEmail, setCurrentEmail] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUsers();
        setCurrentEmail(res.data.email);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleEmailChange = (value: string) => {
    setEmail(value);

    if (!value) {
      setError('');
    } else if (!validateEmail(value)) {
      setError('이메일 주소가 올바르지 않아요');
    } else {
      setError('');
    }
  };

  const handleClickCancel = () => {
    setEmail('');
    setError('');
  };

  const handleClickSave = () => {
    if (!email || error) return;

    setCurrentEmail(email);
    setEmail('');
  };

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-3'>
        <span className='text-gray text-xl'>현재 이메일</span>
        <span className='text-xl'>{currentEmail}</span>
      </div>

      <div className='flex flex-col gap-12'>
        <NewEmailInput
          value={email}
          error={error}
          onChange={handleEmailChange}
        />

        <div className='flex justify-center gap-6'>
          <GlobalButton
            aria-label='취소하기 버튼'
            text='취소하기'
            variant='gray'
            onClick={handleClickCancel}
          />
          <GlobalButton
            aria-label='저장하기 버튼'
            text='저장하기'
            onClick={handleClickSave}
          />
        </div>
      </div>
    </div>
  );
};
