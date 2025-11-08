'use client';

import IdearBear from '@/assets/onboarding/idear-bear.svg';
import {MainActionButton} from '@/components/buttons/MainActionButton';
import {MARQUEE_TEXT} from '@/constants/marquee-text';
import {motion} from 'framer-motion';

export default function MainPage() {
  return (
<div className='relative'>
      <div className='flex flex-col items-center gap-13 py-[130px]'>
        <motion.h2
          initial={{opacity: 0.4, filter: 'blur(2px)'}}
          animate={{opacity: 1, filter: 'blur(0px)'}}
          transition={{duration: 1.5, ease: 'easeOut'}}
          className='text-center font-bold sm:text-2xl md:text-[32px]'>
          한 순간의 영감이, 누군가의 시작이 되지 않도록. <br />
          떠오르는 순간, 바로 남기세요.
        </motion.h2>

        <motion.h1
          initial={{opacity: 0.4, filter: 'blur(2px)'}}
          animate={{opacity: 1, filter: 'blur(0px)'}}
          transition={{duration: 1.5, ease: 'easeOut'}}
          className='bg-primary rounded-[100px] px-[69px] py-[13px] text-center font-medium text-white sm:text-2xl md:text-[32px]'>
          당신의 아이디어, 이제 &apos;기록&apos;으로 지켜드릴게요.
        </motion.h1>
        <IdearBear />
      </div>

      <div className='absolute right-[40px] bottom-[70px] flex flex-col gap-4'>
        <MainActionButton text='공모전 보러가기' />
        <MainActionButton text='아이디어 보러가기' />
      </div>

      <div className='bg-primary sticky bottom-0 overflow-hidden py-2.5 text-xl text-white'>
        <div className='marquee-container'>
          <div className='marquee-track'>
            {Array.from({length: 3}).map((_, index) => (
              <span key={index}>{MARQUEE_TEXT}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
