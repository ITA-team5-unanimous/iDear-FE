import {NavBar} from '@/components/layout/NavBar';

export default function SupportLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
