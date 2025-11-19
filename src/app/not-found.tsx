import {MainActionButton} from '@/components/buttons/MainActionButton';
import {ROUTES} from '@/constants/routes';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='flex min-h-screen min-w-full flex-col items-center justify-start gap-9 pt-80'>
      <h1 className='text-primary text-[32px] font-bold'>404 ERROR</h1>
      <div className='text-center leading-snug'>
        <p className='text-[32px] font-medium text-black'>
          페이지를 찾을 수 없습니다.
        </p>
        <p className='text-[32px] font-medium text-black'>
          존재하지 않는 주소를 입력하셨거나,
        </p>
        <p className='text-[32px] font-medium text-black'>
          요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        </p>
      </div>

      <Link href={ROUTES.MAIN}>
        <MainActionButton text='홈으로 이동하기' />
      </Link>
    </section>
  );
}
