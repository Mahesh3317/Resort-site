import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const ResortCollection = ({ limit = null, showFilters = true }) => {
  const [resorts, setResorts] = useState([]);
  const [filteredResorts, setFilteredResorts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();

  const filters = ['All', 'Family', 'Featured', '5 Star'];

  useEffect(() => {
    axios.get('http://localhost:1337/api/resorts?populate=*')
      .then((res) => {
        const data = res.data?.data || [];
        setResorts(data);
        setFilteredResorts(data);
      })
      .catch((err) => {
        console.error('Error fetching resorts:', err);
      });
  }, []);

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
    if (filter === 'All') {
      setFilteredResorts(resorts);
    } else {
      const filtered = resorts.filter(resort =>
        resort?.attributes?.tag?.toLowerCase() === filter.toLowerCase()
      );
      setFilteredResorts(filtered);
    }
  };

  const displayResorts = () => {
    const list = showAll || !limit ? filteredResorts : filteredResorts.slice(0, limit);

    return list.map((item) => {
      const resort = item?.attributes;
      const imageUrl = resort?.image?.data?.attributes?.url
        ? resort.image.data.attributes.url
        : '/fallback.jpg';

      return (
        <div
          key={item.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            cursor: 'pointer',
            transition: '0.2s'
          }}
          onClick={() => router.push(`/resorts/${item.id}`)}
        >
          <img
            src={imageUrl}
            alt={resort?.name || 'Resort'}
            onError={(e) => (e.target.src = '/fallback.jpg')}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '4px'
            }}
          />
          <h3>{resort?.name || 'Unnamed Resort'}</h3>
          <p>{resort?.location || 'Unknown Location'}</p>
          <p>{resort?.description?.slice(0, 100) || 'No description available'}...</p>
          <strong>{resort?.price_display || 'Price on request'}</strong>
        </div>
      );
    });
  };

  return (
    <section style={{ padding: '2rem' }}>
      <h2>Our Resort Collection</h2>

      {showFilters && (
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          {filters.map(filter => (
            <button
              key={filter}
              style={{
                backgroundColor: filter === selectedFilter ? '#333' : '#eee',
                color: filter === selectedFilter ? '#fff' : '#000',
                padding: '0.5rem 1rem',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
              onClick={() => handleFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem'
      }}>
        {displayResorts()}
      </div>

      {limit && filteredResorts.length > limit && (
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {showAll ? 'View Less' : 'View All Resorts'}
          </button>
        </div>
      )}
    </section>
  );
};

export default ResortCollection;
