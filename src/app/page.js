import Clients from '@/components/Clients/Clients';
import FramerWrapper from '@/components/FramerWrapper/FramerWrapper';
import HeroImage from '@/components/HeroSection/HeroImage';
import About from '@/components/HomePage/About/About';
import BrandsSlider from '@/components/HomePage/BrandsSlider/BrandsSlider';
import MetricsSection from '@/components/HomePage/MetricsSection/MetricsSection';
import NewRecentProjects from '@/components/HomePage/RecentProjects/NewRecentProjects';
import ParallexRecentProjects from '@/components/HomePage/RecentProjects/ParallexRecentProjects';
import RecentProjects from '@/components/HomePage/RecentProjects/RecentProjects';
import Projects from '@/components/Projects/Projects';
import VedioSection from '@/components/VedioSection/VedioSection';
import { isMobile } from 'react-device-detect';

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
        <About />
        {/* <NewRecentProjects /> */}
        <ParallexRecentProjects />
        {/* <RecentProjects /> */}
        <MetricsSection />
        {!isMobile && <Projects />}
        <BrandsSlider />
        {!isMobile && <Clients />}
      </FramerWrapper>
    </main>
  );
}
