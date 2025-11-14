import {NavBar} from '@/components/layout/NavBar';

export default function IdeaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
