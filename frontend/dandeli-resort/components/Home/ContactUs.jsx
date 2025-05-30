import React, { useState } from 'react';
import styles from '@styles/Home/ContactUs.module.css';
import axios from 'axios';

function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    packageInterest: '',
    preferredDates: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  function formatDisplayDate(input) {
    if (!input) return '';
    const date = new Date(input);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Only require name and phone
    if (!form.name || !form.phone) {
      setStatus("Please fill in your name and phone number.");
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      // ✅ Only send non-empty optional fields
      const formData = {
        name: form.name,
        phone: form.phone,
      };

      if (form.email) formData.email = form.email;
      if (form.preferredDates) formData.preferred_dates = form.preferredDates;
      if (form.packageInterest) formData.package_interest = form.packageInterest;
      if (form.message) formData.message = form.message;

      await axios.post('http://localhost:1337/api/contact-inquiries', { data: formData }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      setStatus("Inquiry submitted successfully!");
      setForm({
        name: '',
        email: '',
        phone: '',
        packageInterest: '',
        preferredDates: '',
        message: ''
      });
    } catch (error) {
      if (error.response) {
        console.error("Strapi Response Error:", error.response.data);
        setStatus(error.response.data.error?.message || "Submission failed. Try again.");
      } else {
        console.error("Unexpected Error:", error.message);
        setStatus("Unexpected error. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

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
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={styles.input}
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={styles.input}
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className={styles.input}
              value={form.phone}
              onChange={handleChange}
            />
            <select
              name="packageInterest"
              className={styles.input}
              value={form.packageInterest}
              onChange={handleChange}
            >
              <option value="">Package Interest</option>
              <option value="Adventure Package">Adventure Package</option>
              <option value="Family Package">Family Package</option>
              <option value="Couple Package">Couple Package</option>
              <option value="Corporate Package">Corporate Package</option>
              <option value="Other Packages">Other Packages</option>
            </select>
          </div>

          <input
            type="date"
            name="preferredDates"
            placeholder="Preferred Dates"
            className={styles.input}
            value={form.preferredDates}
            onChange={handleChange}
          />

          {form.preferredDates && (
            <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
              Selected Date: {formatDisplayDate(form.preferredDates)}
            </p>
          )}

          <textarea
            name="message"
            placeholder="Your Message"
            className={styles.textarea}
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Sending...' : 'Send Inquiry'}
          </button>

          {status && (
            <p style={{ marginTop: '1rem', color: status.includes('success') ? 'green' : 'red' }}>
              {status}
            </p>
          )}
        </form>

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
