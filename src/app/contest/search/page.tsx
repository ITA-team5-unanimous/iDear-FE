import SuspenseWrapper from '@/components/common/wrappers/SuspenseWrapper';
import {ContestSearch} from '@/components/common/search/ContestSearch';

/**
 * 개발 세미나용 주석 추가
 * 공모전 검색 페이지
 */

export default function ContestSearchResult() {
  return (
    <SuspenseWrapper>
      <ContestSearch />
    </SuspenseWrapper>
  );
}
