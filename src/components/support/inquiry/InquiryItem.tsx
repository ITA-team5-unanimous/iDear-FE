'use client';

import {INQUIRY_STATUS} from '@/constants/inquiry';
import ChevronIcon from '@/assets/chevrons/chevron-right.svg';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';

type InquiryStatus = (typeof INQUIRY_STATUS)[keyof typeof INQUIRY_STATUS];

interface InquiryItemProps {
  id: number;
  title: string;
  description: string;
  status: InquiryStatus;
}

export const InquiryItem = ({
  id,
  title,
  description,
  status,
}: InquiryItemProps) => {
  const router = useRouter();

  const handleClickInquiryList = () => {
    router.push(`${ROUTES.SUPPORT_INQUIRY}/${id}`);
  };

  return (
    <div
      className='border-primary flex h-[200px] w-[1304px] items-center border-b pr-12 pl-12 hover:bg-[#F3F3F3]'
      onClick={handleClickInquiryList}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClickInquiryList();
        }
      }}>
      <div className='flex flex-col'></div>
      <h1 className='text-primary mr-12 text-2xl font-bold'>{id}</h1>
      <h2 className='mr-12 w-[186px] text-center text-xl font-medium'>
        {title}
      </h2>
      <p className='mr-12 line-clamp-1 w-[693px] text-2xl font-bold'>
        {description}
      </p>
      <span className='text-primary mr-auto text-2xl font-bold'>{status}</span>
      <ChevronIcon alt='이동' width={11} height={20} className='m-2.5' />
    </div>
  );
};
