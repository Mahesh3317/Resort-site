import styles from '@/styles/Packages/Testimonials.module.css';

const Testimonials = () => {
    return (
      <section className={styles.testimonialSection}>
        <h2>What Our Guests Say</h2>
        <div className={styles.underline}></div>
        <p className={styles.subtitle}>
          Don't just take our word for it - hear from our satisfied guests about their experiences with our packages.
        </p>
  
        <div className={styles.testimonialCards}>
          <div className={styles.card}>
            <img src="/priya.jpg" alt="Priya Sharma" className={styles.avatar} />
            <h3>Priya Sharma</h3>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.review}>
              "The adventure package was absolutely worth it! White water rafting was the highlight of our trip. 
              The guides were professional and made us feel safe throughout."
            </p>
          </div>
  
          <div className={styles.card}>
            <img src="/rahul.jpg" alt="Rahul Patel" className={styles.avatar} />
            <h3>Rahul Patel</h3>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.review}>
              "We booked the family package and it was perfect for our kids aged 8 and 12. The coracle ride 
              and nature walk were their favorites. The staff went out of their way to make us comfortable!"
            </p>
          </div>
  
          <div className={styles.card}>
            <img src="/ananya.jpg" alt="Ananya Gupta" className={styles.avatar} />
            <h3>Ananya Gupta</h3>
            <div className={styles.stars}>★★★★☆</div>
            <p className={styles.review}>
              "The luxury package was a treat for our anniversary. The private cottage was beautiful with great views. 
              The spa services were top notch."
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;