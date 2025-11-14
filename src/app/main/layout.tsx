import {NavBar} from '@/components/layout/NavBar';
import {MARQUEE_TEXT} from '@/constants/marquee-text';

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <NavBar />

      <main className='flex-grow'>{children}</main>

      <footer className='bg-primary overflow-hidden py-2.5 text-xl text-white'>
        <div className='marquee-container'>
          <div className='marquee-track'>
            {Array.from({length: 3}).map((_, index) => (
              <span key={index}>{MARQUEE_TEXT}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
