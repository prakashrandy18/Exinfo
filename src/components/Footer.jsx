import Link from 'next/link';
import getNavLinks from '@/lib/get-nav-links';
import SocialMediaLinks from './SocialMedia/SocialMediaLinks';
import FooterItems from './Footer/FooterItems';
import SocialIcons from './Footer/SocialIcons';
import { Icons } from './Footer/FooterMenu';

export default async function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <FooterItems />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 align-middle
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span className="flex  items-end ml-8">
          © 2020 Appy. All rights reserved.
        </span>
        <span className="flex items-end ml-8">Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
        {/* <SocialMediaLinks /> */}
      </div>
    </footer>
  );
}
