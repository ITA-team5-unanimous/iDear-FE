import {WithdrawGuideClient} from '@/app/mypage/withdraw-guide/_components/WithdrawGuideClient';
import {BackButton} from '@/components/buttons/BackButton';
import {WITHDRAW_GUIDE} from '@/constants/withdraw-guide';

export default function WithdrawGuidePage() {
  return (
    <section className='relative flex flex-col gap-14 px-[382px]'>
      <BackButton />
      <div className='flex flex-col gap-16 pt-[140px]'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-[32px] font-bold'>탈퇴 전 유의사항</h1>
          <p className='text-gray text-xl font-medium'>
            회원 탈퇴를 진행하시면 아래 내용을 모두 확인하고 동의한 것으로
            간주됩니다.
          </p>
        </div>
      </div>
      <div>
        {WITHDRAW_GUIDE.map((sentence, i) => (
          <div key={i} className='flex items-center gap-2'>
            <span className='mt-1 h-1 w-1 shrink-0 rounded-full bg-black' />

            <p className='text-xl leading-relaxed'>
              {sentence.parts.map((part, j) => (
                <span
                  key={j}
                  className={part.highlight ? 'text-primary font-medium' : ''}>
                  {part.text}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
      <WithdrawGuideClient />
    </section>
  );
}
