import Link from 'next/link';
import styles from '@styles/Home/TestimonialsSection.module.css';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      text: "The white water rafting experience was absolutely thrilling! The guides were professional and made us feel safe throughout. The resort facilities were excellent and the food was delicious. Can't wait to visit again!",
      rating: 5,
      avatar: "/images/testimonials/priya.jpg",
      location: "Mumbai"
    },
    {
      id: 2,
      name: "Rahul Patel",
      text: "We booked the family package and it was perfect for us. The kids loved the nature walks and bird watching. The staff went out of their way to make our stay comfortable. The swimming pool was a big hit with the whole family!",
      rating: 5,
      avatar: "/images/testimonials/rahul.jpg",
      location: "Bangalore"
    },
    {
      id: 3,
      name: "Ananya Reddy",
      text: "The premium retreat package was worth every penny. The luxury suite was beautiful with amazing views. The spa treatments were relaxing after a day of adventure activities. The private rafting experience was the highlight of our trip!",
      rating: 5,
      avatar: "/images/testimonials/ananya.jpg",
      location: "Delhi"
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>What Our Guests Say</h2>
          <p className={styles.subtitle}>Hear from our happy guests about their experiences</p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className={styles.avatar}
                />
                <div className={styles.authorInfo}>
                  <h4>{testimonial.name}</h4>
                  <p className={styles.location}>{testimonial.location}</p>
                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAll}>
          <Link href="/testimonials" className={styles.viewAllButton}>
            View All Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}