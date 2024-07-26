import Clients from '@/components/Clients/Clients';
import FramerWrapper from '@/components/FramerWrapper/FramerWrapper';
import HeroImage from '@/components/HeroSection/HeroImage';
import BrandsSlider from '@/components/HomePage/BrandsSlider/BrandsSlider';
import Projects from '@/components/Projects/Projects';
import VedioSection from '@/components/VedioSection/VedioSection';

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
    <main>
      <FramerWrapper>
        <HeroImage />
        {/* <VedioSection /> */}
        <Projects />
        <Clients />
        <BrandsSlider />
      </FramerWrapper>
    </main>
  );
}
