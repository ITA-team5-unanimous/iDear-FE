'use client';

import {ROUTES} from '@/constants/routes';
import {useRouter} from 'next/navigation';

interface SupportCardProps {
  title: string;
  contents: string[];
  categoryKey: string;
}

export const SupportCard = ({
  title,
  contents,
  categoryKey,
}: SupportCardProps) => {
  const router = useRouter();

  const handleClickCard = () => {
    router.push(`${ROUTES.SUPPORT_INQUIRY_NEW}?category=${categoryKey}`);
  };

  return (
    <div
      className='border-primary flex min-w-[435px] cursor-pointer flex-col items-center gap-6 rounded-[8px] border-2 px-6 py-16 hover:scale-101 hover:shadow-md'
      onClick={handleClickCard}>
      <strong className='text-2xl font-bold'>{title}</strong>
      <div className='text-gray flex flex-col text-xl font-medium'>
        {contents.map((line, idx) => (
          <p key={idx} className='flex items-start gap-4'>
            <span className='bg-gray mt-[10px] block h-1 w-1 rounded-full' />
            <span>{line}</span>
          </p>
        ))}
      </div>
    </div>
  );
};
