import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import ScrollToTopButton from '@components/ScrollToTopButton';
import styles from '@styles/Layout.module.css';

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