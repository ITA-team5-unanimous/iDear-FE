import {EmailChangeForm} from '@/app/mypage/email/_components/EmailChangeForm';
import {BackButton} from '@/components/buttons/BackButton';
import {EMAIL_TEXT} from '@/constants/mypage-text';

export default function MyPageEmailChangePage() {
  return (
    <div className='w-full'>
      <header className='relative'>
        <BackButton />
      </header>

      <div className='flex flex-col gap-12 px-95.5 pt-36.25'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-[32px] font-bold'>이메일 변경</h1>
          <ul className='text-gray list-disc pl-6 text-xl'>
            {EMAIL_TEXT.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>

        <EmailChangeForm />
      </div>
    </div>
  );
}
