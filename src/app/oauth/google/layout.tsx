import SuspenseWrapper from '@/components/common/wrappers/SuspenseWrapper';
import React from 'react';

export default function GoogleRedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SuspenseWrapper fallback={<div>구글 로그인 중...</div>}>
      {children}
    </SuspenseWrapper>
  );
}
