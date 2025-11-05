import SuspenseWrapper from '@/components/common/wrappers/SuspenseWrapper';
import React from 'react';

export default function KakaoRedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SuspenseWrapper fallback={<div>카카오 로그인 중...</div>}>
      {children}
    </SuspenseWrapper>
  );
}
