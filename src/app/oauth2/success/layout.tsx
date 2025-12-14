import SuspenseWrapper from '@/components/common/wrappers/SuspenseWrapper';

export default function OAuth2SuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SuspenseWrapper>{children}</SuspenseWrapper>;
}
