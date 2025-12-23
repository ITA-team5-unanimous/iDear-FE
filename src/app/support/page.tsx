import IdearFace from '@/assets/logo/idear-face.svg';
import {BackButton} from '@/components/buttons/BackButton';
import {MainActionButton} from '@/components/buttons/MainActionButton';
import {ConsultationCard} from '@/app/support/_components/ConsultationCard';
import {SupportCard} from '@/app/support/_components/SupportCard';
import {ROUTES} from '@/constants/routes';
import {
  CONSULTATION_STEPS,
  SUPPORT_CARDS,
  SUPPORT_TEXT,
} from '@/constants/support';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className='relative flex flex-col'>
      <BackButton />
      <section className='bg-primary-3 flex min-h-[541px] flex-col items-center gap-6 px-41 py-15'>
        <div className='flex flex-col'>
          <IdearFace />
          <h1 className='text-4xl font-medium'>{SUPPORT_TEXT.title}</h1>
        </div>

        <div className='flex flex-col items-center text-center text-xl font-medium'>
          {SUPPORT_TEXT.description.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      </section>

      <div className='flex flex-col gap-10 px-41 py-15'>
        <section className='flex flex-col gap-10'>
          <div className='flex flex-row items-center gap-6'>
            <h2 className='text-[32px] font-bold'>고객센터 문의 항목</h2>
            <p className='text-primary text-xl font-medium'>
              클릭하여 문의사항을 남겨 주세요!
            </p>
          </div>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-row gap-12'>
              {SUPPORT_CARDS.slice(0, 3).map((card, idx) => (
                <SupportCard
                  key={idx}
                  title={card.title}
                  contents={card.contents}
                />
              ))}
            </div>

            <div className='flex flex-row justify-center gap-12'>
              {SUPPORT_CARDS.slice(3, 5).map((card, idx) => (
                <SupportCard
                  key={idx}
                  title={card.title}
                  contents={card.contents}
                />
              ))}
            </div>
          </div>
        </section>

        <section className='border-gray flex flex-row items-center justify-between border-y py-15'>
          <div className='flex flex-col gap-6'>
            <h2 className='text-[32px] font-bold'>나의 문의 내역</h2>
            <p className='text-primary text-xl font-medium'>
              지금까지 남긴 문의와 받은 답변을 여기에서 모두 확인할 수 있어요!
            </p>
          </div>
          <Link href={`${ROUTES.SUPPORT_INQUIRY}`}>
            <MainActionButton text='목록으로 이동하기' />
          </Link>
        </section>

        <section className='bg-gray-3 flex flex-col gap-[76px] rounded-[8px] px-[42px] py-12'>
          <h2 className='text-[32px] font-bold'>고객 상담 절차</h2>
          <div className='relative flex flex-row items-center justify-center gap-3'>
            <div className='bg-primary absolute top-1/2 right-0 left-0 z-0 h-[2px]'></div>

            {CONSULTATION_STEPS.map((step, idx) => (
              <div key={idx} className='relative z-10'>
                <ConsultationCard
                  title={step.title}
                  content={step.content}
                  icon={<step.icon />}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
