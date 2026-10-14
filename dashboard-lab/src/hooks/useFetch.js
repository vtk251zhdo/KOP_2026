import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Помилка HTTP: ${response.status}`);
        
        const result = await response.json();
        
        const formattedData = result.data.map((item, index) => ({
          mal_id: item.id,
          rank: index + 1,
          title: item.attributes.canonicalTitle,
          type: item.attributes.showType,
          episodes: item.attributes.episodeCount,
          score: parseFloat(item.attributes.averageRating) || 0
        }));

        setData(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};