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
    <li
      className='border-primary hover:bg-gray-3 flex h-[200px] items-center gap-12 border-b px-12'
      onClick={handleClickInquiryList}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClickInquiryList();
        }
      }}>
      <h1 className='text-primary m-2.5 text-2xl font-bold'>{id}</h1>
      <h2 className='w-[186px] text-center text-xl font-medium'>{title}</h2>
      <p className='line-clamp-1 w-[693px] text-2xl font-bold'>{description}</p>
      <div className='flex items-center gap-0'>
        <span className='text-primary w-[85px] text-2xl font-bold'>
          {status}
        </span>
        <ChevronIcon
          alt='이동'
          width={11}
          height={20}
          className='mr-2.5 ml-5'
        />
      </div>
    </li>
  );
};
