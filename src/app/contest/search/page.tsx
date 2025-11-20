'use client';
import SuspenseWrapper from '@/components/common/wrappers/SuspenseWrapper';
import {ContestSearch} from '@/components/common/search/ContestSearch';

export default function ContestSearchResult() {
  return (
    <SuspenseWrapper>
      <ContestSearch />
    </SuspenseWrapper>
  );
}
