'use client';

import {SocialLoginButton} from '@/components/buttons/SocialLoginButton';
import {OAUTH_SERVICES} from '@/constants/oauth';
import Logo from '@/assets/logo/idear.svg';
import IdearBear from '@/assets/onboarding/idear-bear.svg';

export default function LoginPage() {
  return (
    <div className='flex min-h-screen flex-col xl:flex-row'>
      <section className='flex items-center justify-center sm:flex-[12]'>
        <div className='absolute top-9 left-9'>
          <Logo />
        </div>
        <div className='mt-20 sm:mt-0 xl:translate-y-12'>
          <IdearBear />
        </div>
      </section>
      <section className='xl:border-l-primary flex flex-col items-center justify-center gap-[67px] sm:px-[110px] xl:border-l-2'>
        <h1 className='text-center text-2xl leading-11 font-medium sm:text-4xl'>
          반가워요!
          <br /> 로그인/가입 방법을 선택해 주세요.
        </h1>
        <ul className='flex w-full flex-col gap-6 px-[28px]'>
          {OAUTH_SERVICES.map((service) => (
            <SocialLoginButton key={service.name} name={service.name} />
          ))}
        </ul>
      </section>
    </div>
  );
}
