'use client';
import Image from 'next/image';

function Logo() {
  return (
    <Image
      src="/images/Exinfo_logo.png"
      alt="Exinfo Logo"
      width={80}
      height={20}
    />
  );
}

export default Logo;
