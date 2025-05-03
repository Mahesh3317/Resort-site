import Image from 'next/image';
import styles from '@styles/About/MeetOurTeam.module.css';

const teamMembers = [
  {
    name: 'Rahul',
    role: 'Founder & Lead Guide',
    description:
      "10+ years exploring Dandeli's wilderness. Certified in advanced mountaineering and wildlife tracking.",
    image: '/team/rahul.png',
  },
  {
    name: 'Priya',
    role: 'Activities Head',
    description:
      'River rafting expert with 8 years experience. Knows every rapid on the Kali River.',
    image: '/team/priya.png',
  },
  {
    name: 'Vikram',
    role: 'Resort Coordinator',
    description:
      'Ensures you get the best stays at affordable prices. Knows all the hidden gem resorts.',
    image: '/team/vikram.png',
  },
  {
    name: 'Ananya',
    role: 'Customer Relations',
    description:
      'Makes sure every guest gets personalized attention and has a seamless experience.',
    image: '/team/ananya.png',
  },
];

export default function MeetOurTeam() {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.heading}>Meet Our Team</h2>
      <p className={styles.subheading}>
        The passionate local experts who make your Dandeli adventure unforgettable
      </p>
      <div className={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={200}
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.description}>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
