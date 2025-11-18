import Link from 'next/link';

interface NavItemProps {
  href: string;
  label: string;
}

export const NavItem = ({href, label}: NavItemProps) => (
  <Link href={href}>
    <span className='hover:border-b-primary px-2 py-1 hover:border-b-2 sm:text-xl md:text-2xl'>
      {label}
    </span>
  </Link>
);
