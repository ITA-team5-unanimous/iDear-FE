import type {Metadata} from 'next';

import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'iDear',
  description: 'iDear Web Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
