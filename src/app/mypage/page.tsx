import {MyPageOptionList} from '@/app/mypage/_components/MyPageOptionList';
import {ProfileImage} from '@/app/mypage/_components/ProfileImage';
import {BackButton} from '@/components/buttons/BackButton';

export default function MyPage() {
  return (
    <div className='w-full'>
      <header className='relative'>
        <BackButton />
      </header>

      <div className='flex flex-col gap-16 px-41 pb-55'>
        <h1 className='mt-[62px] text-2xl font-bold'>나의 계정</h1>

        <ProfileImage />

        <MyPageOptionList />
      </div>
    </div>
  );
}
