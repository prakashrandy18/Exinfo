import Clients from '@/components/Clients/Clients';
import FramerWrapper from '@/components/FramerWrapper/FramerWrapper';
import HeroImage from '@/components/HeroSection/HeroImage';
import Projects from '@/components/Projects/Projects';

export async function generateMetadata() {
  return {
    title: 'Exinfo solutions',
    description: 'Exinfo Solutions...',
    openGraph: {
      title: 'Exinfo solutions' || undefined,
      images: [
        {
          url: '/images/Exinfo_logo_white.png' || '',
        },
      ],
    },
  };
}

export default function Home() {
  return (
    <main className="w-screen">
      <FramerWrapper>
        <HeroImage />
        <Projects />
        <Clients />
      </FramerWrapper>
    </main>
  );
}
