// /components/HomePage.jsx
import HeroSection from "./HeroSection.jsx";
import ActivitiesSection from "./ActivitiesSection.jsx";
import AboutSection from "./AboutSection.jsx";
import ScrollToTopButton from "./ScrollToTopButton.jsx"; 
import FeaturedResorts from "./FeaturedResorts.jsx";
import PackagesSection from '@components/PackagesSection';
import SEO from "./SEO.jsx";

export default function HomePage() {
  return (
    <>
      <SEO title="Dandeli Resorts & Adventure | Book Your Stay" />
      <HeroSection />
      <ActivitiesSection />
      <FeaturedResorts />
      <PackagesSection />
      <AboutSection />
      <ScrollToTopButton />
    </>
  );
}
