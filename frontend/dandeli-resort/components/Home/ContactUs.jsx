import React from 'react';
import styles from '@styles/Home/ContactUs.module.css';

function ContactUs() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Contact Us</h2>
        <div className={styles.underline}></div>
        <p className={styles.subtitle}>
          Have questions or ready to book your adventure? Reach out to us and we'll be happy to assist you.
        </p>
      </div>

      <div className={styles.contactContainer}>
        {/* Left: Contact Form */}
        <form className={styles.contactForm}>
          <div className={styles.row}>
            <input type="text" placeholder="Your Name" className={styles.input} />
            <input type="email" placeholder="Email Address" className={styles.input} />
          </div>

          <div className={styles.row}>
            <input type="text" placeholder="Phone Number" className={styles.input} />
            <select className={styles.input}>
              <option>Package Interest</option>
              <option>Adventure Package</option>
              <option>Family Package</option>
              <option>Corporate Package</option>
            </select>
          </div>

          <input type="text" placeholder="Preferred Dates" className={styles.input} />
          <textarea placeholder="Your Message" className={styles.textarea}></textarea>

          <button type="submit" className={styles.submitButton}>
            Send Inquiry
          </button>
        </form>

        {/* Right: Contact Info */}
        <div className={styles.contactInfo}>
          <h3 className={styles.infoTitle}>Get in Touch</h3>

          <div className={styles.infoItem}>
            <span className={styles.icon}>📍</span>
            <div>
              <strong>Address</strong><br />
              Dandeli Wildlife Sanctuary, Near Kali River, Karnataka 581325, India
            </div>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.icon}>📞</span>
            <div>
              <strong>Phone</strong><br />
              +91 9876543210<br />
              +91 0123456789 (Office)
            </div>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.icon}>✉️</span>
            <div>
              <strong>Email</strong><br />
              info@dandeliresort.com<br />
              bookings@dandeliresort.com
            </div>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.icon}>🕑</span>
            <div>
              <strong>Office Hours</strong><br />
              Monday - Sunday: 8:00 AM - 8:00 PM
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/icons/whatsapp.svg" alt="WhatsApp" /></a>
            <a href="#"><img src="/icons/youtube.svg" alt="YouTube" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
