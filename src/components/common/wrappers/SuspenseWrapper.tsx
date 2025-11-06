'use client';

import {ReactNode, Suspense} from 'react';

export default function SuspenseWrapper({
  children,
  fallback = 'Loading...',
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  return <Suspense fallback={fallback}>{children}</Suspense>;
}
