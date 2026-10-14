import React, { useState, useEffect } from 'react';
import KpiCard from './KpiCard';
import AnimeTable from './AnimeTable';

const API_URL = 'https://api.jikan.moe/v4/top/anime?limit=15';

const DashboardContainer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`Помилка HTTP: ${response.status}`);
        
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnime();
  }, []);

  if (isLoading) return <div style={{ padding: '20px', fontSize: '18px' }}>⏳ Завантаження бази MyAnimeList...</div>;
  if (error) return <div style={{ color: 'red', padding: '20px' }}>❌ Помилка завантаження: {error}</div>;
  if (!data || data.length === 0) return <div style={{ padding: '20px' }}>📭 Немає даних для відображення.</div>;

  const topAnime = data.reduce((prev, current) => (prev.score > current.score ? prev : current));
  const avgScore = (data.reduce((acc, anime) => acc + anime.score, 0) / data.length).toFixed(2);
  const tvSeriesCount = data.filter(anime => anime.type === 'TV').length;

  return (
    <div>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
        <KpiCard title="Найкраще в топі" value={topAnime.title_english || topAnime.title} trend={`⭐ ${topAnime.score}`} />
        <KpiCard title="Середній рейтинг топу" value={avgScore} trend="Live" />
        <KpiCard title="TV Серіалів у списку" value={tvSeriesCount} trend={`З ${data.length} тайтлів`} />
      </div>
      
      <AnimeTable data={data} />
    </div>
  );
};

export default DashboardContainer;