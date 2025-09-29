'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';

function page() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/dataConsult/characters');
      setData(res.data.results);
    };
    fetchData();
  }, []);
  return (
    <>
      <section>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard page.</p>
      </section>
      <section>
        <h2>Characters</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}></div>
      </section>
    </>
  );
}

export default page;
