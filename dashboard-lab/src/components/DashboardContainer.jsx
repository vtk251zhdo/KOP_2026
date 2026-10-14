import React, { useState, useMemo } from 'react';
import KpiCard from './KpiCard';
import AnimeTable from './AnimeTable';
import FilterForm from './FilterForm';
import { useDebounce } from '../hooks/useDebounce';
import { useFetch } from '../hooks/useFetch';

const DashboardContainer = () => {
  const defaultFilters = { search: '', status: '', sort: '-averageRating' };
  const [filters, setFilters] = useState(defaultFilters);

  const debouncedSearch = useDebounce(filters.search, 500);

  const apiUrl = useMemo(() => {
    let url = `https://kitsu.io/api/edge/anime?page[limit]=15&sort=${filters.sort}`;
    
    if (debouncedSearch) {
      url += `&filter[text]=${encodeURIComponent(debouncedSearch)}`;
    }
    if (filters.status) {
      url += `&filter[status]=${filters.status}`;
    }
    
    return url;
  }, [debouncedSearch, filters.status, filters.sort]);

  const { data, loading, error } = useFetch(apiUrl);

  const handleReset = () => setFilters(defaultFilters);

  const topAnime = data?.length > 0 ? data.reduce((prev, current) => (prev.score > current.score ? prev : current)) : null;
  const avgScore = data?.length > 0 ? (data.reduce((acc, anime) => acc + anime.score, 0) / data.length).toFixed(2) : 0;
  const tvSeriesCount = data?.length > 0 ? data.filter(anime => anime.type === 'TV').length : 0;

  return (
    <div>
      {}
      <FilterForm filters={filters} setFilters={setFilters} onReset={handleReset} />

      {}
      {loading && <div style={{ padding: '20px', fontSize: '18px' }}>⏳ Завантаження...</div>}
      {error && <div style={{ color: 'red', padding: '20px' }}>❌ Помилка: {error}</div>}
      {!loading && !error && data.length === 0 && <div style={{ padding: '20px' }}>📭 Нічого не знайдено за цими фільтрами.</div>}

      {}
      {!loading && !error && data.length > 0 && (
        <>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
            <KpiCard title="Найкраще у вибірці" value={topAnime?.title || '-'} trend={topAnime ? `⭐ ${topAnime.score}` : ''} />
            <KpiCard title="Середній рейтинг" value={avgScore} trend="Live" />
            <KpiCard title="TV Серіалів" value={tvSeriesCount} trend={`З ${data.length} тайтлів`} />
          </div>
          <AnimeTable data={data} />
        </>
      )}
    </div>
  );
};

export default DashboardContainer;