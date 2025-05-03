import React from 'react';
import styles from '@styles/About/WhyChooseUs.module.css';
import { Compass, IndianRupee, ShieldCheck } from 'lucide-react';

const features = [
  {
    Icon: Compass,
    title: 'Local Expertise',
    description:
      "Our 7 years of experience means we know Dandeli better than anyone. We'll take you beyond the tourist spots to discover the real magic of the region.",
  },
  {
    Icon: IndianRupee,
    title: 'Best Value',
    description:
      "We've negotiated the best rates with local resorts and activity providers to bring you premium experiences at affordable prices.",
  },
  {
    Icon: ShieldCheck,
    title: 'Safety First',
    description:
      'All our activities follow strict safety protocols. Our guides are certified in wilderness first aid and all equipment is regularly inspected.',
  },
];

const WhyChooseSection = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Why Choose Dandeli Adventures</h2>
      <p className={styles.subheading}>
        What sets us apart from other adventure providers
      </p>
      <div className={styles.cardGrid}>
        {features.map(({ Icon, title, description }, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.iconCircle}>
              <Icon size={32} strokeWidth={2.5} />
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
