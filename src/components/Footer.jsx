import Link from 'next/link';
import Logo from './Logo';
import getNavLinks from '@/lib/get-nav-links';
import SocialMediaLinks from './SocialMedia/SocialMediaLinks';

export default async function Footer() {
  const navLinks = getNavLinks();
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row w-screen">
      {/* <SocialMediaLinks /> */}

      <nav aria-label="Footer">
        <ul className="flex gap-6 sm:hidden">
          {navLinks?.map((item) => (
            <li
              key={item.label}
              className={`inline-flex min-h-11 items-center ${'page'}`}
            >
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
