import type {Metadata} from 'next';

import '@/app/globals.css';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import {UserInitializer} from '@/components/user/UserInitializer';

export const metadata: Metadata = {
  title: 'iDear',
  description: 'iDear Web Application',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='ko'>
      <body>
        <ReactQueryProvider>
          <UserInitializer />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
