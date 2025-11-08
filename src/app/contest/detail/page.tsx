'use client';

import {mockContestDetail} from '@/mocks/data/mockContestDetail';
import DefaultImage from '@/assets/default/default-image.svg';
import ChevronLeft from '@/assets/chevrons/chevron-left.svg';
import Share from '@/assets/contest/share.svg';
import LikeIcon from '@/assets/main/like-icon.svg';
import {DayBadge} from '@/components/contest/DayBadge';
import GlobalButton from '@/components/buttons/GlobalButton';

export default function ContestDetailPage() {
  const contest = mockContestDetail[0];

  const handleShareClick = () => {
    console.log('공유 버튼 클릭');
  };
  const handleLikeClick = () => {
    console.log('좋아요 클릭');
  };
  const handleGoSiteClick = () => {
    console.log('웹사이트 보러 가기 클릭');
  };
  const handleRegisterClick = () => {
    console.log('아이디어 등록하기 클릭');
  };

  return (
    <div className='relative flex flex-col items-center px-40 py-[54px]'>
      <button className='absolute top-[55px] left-9'>
        <ChevronLeft />
      </button>

      <h1 className='border-b-primary w-full border-b pb-4 text-start text-[32px] font-bold'>
        {contest.title}
      </h1>

      <div className='border-b-primary relative flex w-full flex-row gap-[90px] border-b py-6'>
        <div className='flex-shrink-0'>
          <DefaultImage />
        </div>

        <section className='flex w-full flex-col gap-9'>
          <div className='absolute top-6 right-0 flex flex-row items-center gap-3'>
            <button onClick={handleShareClick} aria-label='공유 버튼'>
              <Share />
            </button>
            <button onClick={handleLikeClick} aria-label='좋아요 버튼'>
              <LikeIcon />
            </button>
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>접수 기간</h2>
            <div className='flex flex-row items-center gap-[90px]'>
              <DayBadge date={'12'} />
              <h3 className='text-xl font-normal'>
                {contest.startPeriod} ~ {contest.endPeriod}
              </h3>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>기관</h2>
            <div className='flex flex-row gap-[138px] text-xl font-normal'>
              <p>주최</p>
              <p>{contest.hostingOrganization}</p>
            </div>
            <div className='flex flex-row gap-[138px] text-xl font-normal'>
              <p>주관</p>
              <p>{contest.managementOrganization}</p>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-bold'>시상</h2>
            <div className='flex flex-row gap-[90px] text-xl font-normal'>
              <p>1등시상금</p>
              <p>{contest.firstPrize}</p>
            </div>
            <div className='flex flex-row gap-[103px] text-xl font-normal'>
              <p>총시상금</p>
              <p>{contest.totalPrize}</p>
            </div>
          </div>
          <div className='flex flex-row gap-6'>
            <GlobalButton
              text='웹사이트 보러가기'
              onClick={handleGoSiteClick}
            />
            <GlobalButton
              text='아이디어 등록하기'
              onClick={handleRegisterClick}
            />
          </div>
        </section>
      </div>

      <section className='border-gray mt-12 w-full rounded-[8px] border p-9'>
        <div className='text-base whitespace-pre-wrap'>
          {contest.description}
        </div>
      </section>
    </div>
  );
}
