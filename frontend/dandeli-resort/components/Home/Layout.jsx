import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';
import ScrollToTopButton from '@/components/Home/ScrollToTopButton';
import styles from '@styles/Home/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

