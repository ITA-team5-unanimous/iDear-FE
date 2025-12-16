'use client';

import {useSearchParams} from 'next/navigation';
import {ContestListClient} from './ContestListClient';
import {ContestSearchClient} from '@/app/contest/_components/ContestSearchClient';

export const ContestMainClient = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q')?.trim() ?? '';

  if (keyword) {
    return <ContestSearchClient />;
  }

  return <ContestListClient />;
};
