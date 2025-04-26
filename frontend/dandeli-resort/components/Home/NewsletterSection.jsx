import styles from '@styles/Home/NewsletterSection.module.css';

export default function NewsletterSection() {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Stay Updated</h2>
        <p className={styles.subtitle}>
          Subscribe to our newsletter for exclusive offers, adventure tips, and updates about Dandeli Resort.
        </p>
        
        <form className={styles.form}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className={styles.input} 
            required
          />
          <button type="submit" className={styles.button}>
            Subscribe
          </button>
        </form>

        <p className={styles.privacyNote}>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
