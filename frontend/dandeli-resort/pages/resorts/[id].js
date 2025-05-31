// pages/resorts/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ResortDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [resort, setResort] = useState(null);

  useEffect(() => {
    if (!id) return;
    axios.get(`http://localhost:1337/api/resorts/${id}?populate=*`)
      .then(res => setResort(res.data.data));
  }, [id]);

  if (!resort) return <p>Loading...</p>;

  const imgUrl = resort.attributes.image?.data?.attributes?.url || '';

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{resort.attributes.name}</h1>
      <img
        src={imgUrl}
        alt={resort.attributes.name}
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
      />
      <p><strong>Location:</strong> {resort.attributes.location}</p>
      <p><strong>Price:</strong> {resort.attributes.price_display}</p>
      <div dangerouslySetInnerHTML={{ __html: resort.attributes.description }} />
    </div>
  );
};

export default ResortDetail;
