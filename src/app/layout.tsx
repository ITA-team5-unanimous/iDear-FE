import type {Metadata} from 'next';

import '@/app/globals.css';
import ReactQueryProvider from '@/providers/ReactQueryProvider';

export const metadata: Metadata = {
  title: 'iDear',
  description: 'iDear Web Application',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='ko'>
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
