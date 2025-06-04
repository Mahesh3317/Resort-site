import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '@styles/Resorts/ResortCollection.module.css';

export default function ResortCollection() {
  const [resorts, setResorts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [activeTag, setActiveTag] = useState('All');
  const [availableTags, setAvailableTags] = useState(['All']);

  useEffect(() => {
    const fetchResorts = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/resorts?populate=*");
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        
        const formattedResorts = result.data.map(item => {
          const resortData = item.attributes || item;
          const imageData = resortData.image?.data || resortData.image;
          let imageUrl = null;
          
          if (imageData) {
            const img = Array.isArray(imageData) ? imageData[0] : imageData;
            imageUrl = img.attributes?.url || img.url;
          }

          return {
            id: item.id,
            name: resortData.name || "Unnamed Resort",
            location: resortData.location || "Location not specified",
            price: resortData.price ?? 0,
            price_display: resortData.price_display || "",
            rating: resortData.rating ?? "No rating",
            tag: resortData.tag || "Uncategorized",
            imageUrl: imageUrl ? `http://localhost:1337${imageUrl}` : null
          };
        });

        setResorts(formattedResorts);
        const tags = ['All', ...new Set(formattedResorts.map(r => r.tag).filter(Boolean))];
        setAvailableTags(tags);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResorts();
  }, []);

  const filteredResorts = activeTag === 'All' 
    ? resorts 
    : resorts.filter(resort => resort.tag === activeTag);

  const displayedResorts = showAll ? filteredResorts : filteredResorts.slice(0, 9);

  if (loading) return <div className={styles.loading}>Loading resorts...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.resortContainer}>
      <div className={styles.tagFilters}>
        {availableTags.map(tag => (
          <button
            key={tag}
            className={`${styles.tagFilter} ${activeTag === tag ? styles.active : ''}`}
            onClick={() => {
              setActiveTag(tag);
              setShowAll(false);
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className={styles.resortGrid}>
        {displayedResorts.map((resort) => (
          <Link href={`/resorts/${resort.id}`} key={resort.id} className={styles.resortLink}>
            <div className={styles.resortCard}>
              {resort.tag && <span className={styles.tagBadge}>{resort.tag}</span>}
              
              {resort.imageUrl ? (
                <div className={styles.imageContainer}>
                  <img
                    src={resort.imageUrl}
                    alt={resort.name}
                    className={styles.cardImage}
                    onLoad={(e) => e.target.nextElementSibling.style.display = 'none'}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <div className={styles.imageFallback} style={{display: 'none'}}>
                    Image Not Available
                  </div>
                </div>
              ) : (
                <div className={styles.imagePlaceholder}>No Image</div>
              )}

              <div className={styles.cardContent}>
                <h3>{resort.name}</h3>
                <p>💰 ${resort.price.toLocaleString()} {resort.price_display}</p>
                <p>⭐ {resort.rating} rating</p>
                <p>📍 {resort.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredResorts.length > 9 && (
        <div className={styles.viewControls}>
          {!showAll ? (
            <button 
              className={styles.viewButton}
              onClick={() => setShowAll(true)}
            >
              Explore More Resorts
            </button>
          ) : (
            <button 
              className={styles.viewButton}
              onClick={() => setShowAll(false)}
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
}