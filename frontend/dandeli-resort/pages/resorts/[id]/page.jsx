import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@styles/Resorts/ResortDetail.module.css';

export default function ResortDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [resort, setResort] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    
    const fetchResort = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:1337/api/resorts/${id}?populate=*`);
        if (!res.ok) throw new Error('Failed to fetch resort');
        const { data } = await res.json();
        setResort(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResort();
  }, [id]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!resort) return <div className={styles.notFound}>Resort not found</div>;

  const { attributes } = resort;
  const imageUrl = attributes.image?.data?.attributes?.url
    ? `http://localhost:1337${attributes.image.data.attributes.url}`
    : null;

  return (
    <div className={styles.container}>
      <button onClick={() => router.back()} className={styles.backButton}>
        ← Back to Resorts
      </button>
      
      <div className={styles.resortHeader}>
        <h1 className={styles.title}>{attributes.name}</h1>
        <div className={styles.meta}>
          <span className={styles.rating}>⭐ {attributes.rating} / 5</span>
          {attributes.tag && (
            <span className={styles.tag}>{attributes.tag}</span>
          )}
        </div>
      </div>

      <div className={styles.imageContainer}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={attributes.name}
            className={styles.mainImage}
          />
        ) : (
          <div className={styles.imagePlaceholder}>No Image Available</div>
        )}
      </div>

      <div className={styles.details}>
        <div className={styles.quickInfo}>
          <h2>📍 {attributes.location}</h2>
          <p className={styles.price}>
            💰 {attributes.price_display || `$${attributes.price} per night`}
          </p>
        </div>

        <div className={styles.description}>
          <h3>Description</h3>
          <div dangerouslySetInnerHTML={{ __html: attributes.description }} />
        </div>
      </div>
    </div>
  );
}