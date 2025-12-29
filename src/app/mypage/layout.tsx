import {NavBar} from '@/components/layout/NavBar';

export default function MypageLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
