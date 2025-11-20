import IdearBear from '@/assets/onboarding/idear-bear.svg';
import Link from 'next/link';
import {MainActionButton} from '@/components/buttons/MainActionButton';
import {ROUTES} from '@/constants/routes';
import {PositionedLogo} from '@/components/layout/PositionedLogo';

export default function LoginComplete() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-11'>
      <PositionedLogo />
      <IdearBear />
      <div className='flex flex-col gap-1'>
        <h1 className='text-center text-4xl font-medium'>
          환영합니다! 로그인에 성공했어요.
        </h1>
        <p className='text-center text-4xl font-medium'>
          지금 바로 공모전을 둘러보고, 떠오른 아이디어를 기록해 보세요.
        </p>
      </div>
      <Link href={ROUTES.MAIN}>
        <MainActionButton text='지금 바로 시작하기' />
      </Link>
    </div>
  );
}
