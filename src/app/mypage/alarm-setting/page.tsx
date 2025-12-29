import {AlarmSettingClient} from '@/app/mypage/alarm-setting/_components/AlarmSettingClient';
import {BackButton} from '@/components/buttons/BackButton';

export default function AlarmSettingPage() {
  return (
    <section className='relative flex flex-col gap-14 px-[382px]'>
      <BackButton />
      <div className='flex flex-col gap-16 pt-[140px]'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-[32px] font-bold'>알림 채널 설정</h1>
          <p className='text-gray text-xl font-medium'>
            아카이빙 완료, 블록체인 등록 알림 등의 수신 여부를 설정할 수 있어요
          </p>
        </div>
      </div>
      <AlarmSettingClient />
    </section>
  );
}
