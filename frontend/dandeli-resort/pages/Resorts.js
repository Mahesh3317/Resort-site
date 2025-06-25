import HeroSection from '@components/Resorts/HeroSection';
import ResortCollection from '@components/Resorts/ResortCollection';
import PopularDestinations from '@components/Resorts/PopularDestinations';
import UniqueExperiences from '@components/Resorts/UniqueExperiences';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ResortCollection />
      <PopularDestinations />
      <UniqueExperiences />
    </div>
  );
}
