// components/InquiryForm.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Home/InquiryForm.module.css';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <motion.div 
        className={styles.successMessage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h3>Thank You!</h3>
        <p>Your inquiry has been received. Our team will contact you within 24 hours.</p>
        <div className={styles.successBadges}>
          <img src="/icons/24-hours.png" alt="24 hour response" />
          <img src="/icons/best-price.png" alt="Best price guarantee" />
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.inquiryForm}>
      <div className={styles.formHeader}>
        <h3>Plan Your Stay</h3>
        <p>Get the best rates by booking directly with us</p>
      </div>
      
      <div className={styles.formGrid}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Full Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="phone">Phone*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="checkIn">Check-In*</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="checkOut">Check-Out*</label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="guests">Guests*</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className={styles.inputGroup}>
        <label htmlFor="message">Special Requests</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        />
      </div>
      
      <div className={styles.privacyNote}>
        <input type="checkbox" id="privacy" required />
        <label htmlFor="privacy">
          I agree to the privacy policy and terms of service
        </label>
      </div>
      
      <div className={styles.securityBadge}>
        <img src="/icons/secure-form.png" alt="Secure form" />
        <span>Your information is securely encrypted</span>
      </div>
      
      <button 
        type="submit" 
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
}