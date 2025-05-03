'use client';
import { useState } from 'react';
import styles from '@/styles/Packages/FAQSection.module.css';

const faqs = [
  {
    question: "What's included in the package prices?",
    answer: "Our packages typically include accommodation, meals, selected activities, and transportation during your stay."
  },
  {
    question: "Can I customize a package?",
    answer: "Yes! We offer customizable options. Please contact our team to create a tailored experience for you."
  },
  {
    question: "Are there any age restrictions for activities?",
    answer: "Some activities have age restrictions for safety reasons. Contact us for detailed information per activity."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if same question clicked
    } else {
      setActiveIndex(index); // Open new question
    }
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Package FAQs</h2>
      <p className={styles.subtitle}>
        Find answers to common questions about our packages, booking process, and policies.
      </p>

      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
          >
            <div className={styles.question} onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className={styles.icon}>
                {activeIndex === index ? '▴' : '▾'}
              </span>
            </div>
            {activeIndex === index && (
              <div className={styles.answer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;