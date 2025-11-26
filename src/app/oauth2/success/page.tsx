import SuspenseWrapper from '@/components/common/wrappers/SuspenseWrapper';
import {OAuthHandler} from '@/components/oauth/OAuthHandler';

export default function OAuth2SuccessPage() {
  return (
    <SuspenseWrapper
      fallback='
        로그인 처리 중입니다...'>
      <OAuthHandler />
    </SuspenseWrapper>
  );
}
