// /components/HomePage.jsx
import HeroSection from "./HeroSection.jsx";
import ActivitiesSection from "./ActivitiesSection.jsx";
import AboutSection from "./AboutSection.jsx";
import ScrollToTopButton from "./ScrollToTopButton.jsx"; 
import FeaturedResorts from "./FeaturedResorts.jsx";
import FacilitiesSection from '@components/Home/FacilitiesSection';
import TestimonialsSection from '@components/Home/TestimonialsSection';
import PackagesSection from '@components/Home/PackagesSection';
import NewsletterSection from '@components/Home/NewsletterSection';
import BlogSection from '@components/Home/BlogSection';
import ContactUs from '@components/Home/ContactUs';
import SEO from "./SEO.jsx";

export default function HomePage() {
  return (
    <>
      <SEO title="Dandeli Resorts & Adventure | Book Your Stay" />
      <HeroSection />
      <FeaturedResorts />
      <ActivitiesSection />
      <PackagesSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactUs />
      <NewsletterSection />
      <AboutSection />
      <ScrollToTopButton />
    </>
  );
}
