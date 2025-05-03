import PackagesHero from '@/components/Packages/PackagesHero';
import PackagesChoose from '@/components/Packages/PackagesChoose';
import BookingForm from '@/components/Packages/BookingForm';
import Testimonials from '@/components/Packages/Testimonials';
import FAQSection from '@/components/Packages/FAQSection';
export default function PackagesPage() {
  return (
    <>
      <PackagesHero />
      <PackagesChoose />
      <BookingForm />
      <Testimonials />
      <FAQSection />
    </>
  );
}
