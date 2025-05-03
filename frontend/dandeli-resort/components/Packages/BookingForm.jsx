import styles from '@/styles/Packages/BookingForm.module.css';

const BookingForm = () => {
  return (
    <div className={styles.bookingSection}>
      <div className={styles.leftPanel}>
        <h2>Ready to Book Your Package?</h2>
        <p>
          Fill out this form to check availability, get pricing details, or ask any questions about our packages.
          Our team typically responds within 2 hours during business hours.
        </p>
        <div className={styles.contactInfo}>
          <p><span>📞</span> Call Us<br />+91 98765 43210</p>
          <p><span>📧</span> Email Us<br />bookings@dandeliresort.com</p>
          <p><span>🕑</span> Office Hours<br />Monday-Sunday: 8:00 AM - 8:00 PM</p>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <h3>Package Inquiry Form</h3>
        <form className={styles.form}>
          <input type="text" placeholder="Full Name *" required />
          <input type="email" placeholder="Email *" required />
          <input type="tel" placeholder="Phone Number *" required />
          <select required>
            <option value="">Package Interested In *</option>
            <option value="Adventure">Adventure Package</option>
            <option value="Luxury">Luxury Package</option>
            <option value="Family">Family Package</option>
          </select>
          <input type="date" required />
          <input type="date" required />
          <textarea placeholder="Message (optional)" rows="4" />
          <button type="submit">Submit Inquiry</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
