// components/TestimonialsSection.jsx
import { motion } from 'framer-motion';
import styles from '@/styles/TestimonialsSection.module.css';

const testimonials = [
  {
    id: 1,
    name: "Mahesh Sharma",
    location: "Bangalore",
    rating: 5,
    text: "The best nature getaway we've experienced. The staff went above and beyond to make our anniversary special.",
    photo: "/C:/Users/Mahesh/Desktop/Resort-site/frontend/dandeli-resort/public/img/ChatGPT Image Apr 19, 2025, 01_59_28 PM.png"
  },
  // Add more testimonials
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Guests Say</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={testimonial.id}
            className={styles.testimonialCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.testimonialHeader}>
              <img src={testimonial.photo} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.location}</p>
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className={styles.testimonialText}>"{testimonial.text}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}