import React from 'react';
import KpiCard from './components/KpiCard';
import EpisodeCounter from './components/EpisodeCounter';
import ThemeToggle from './components/ThemeToggle';
import AnimeFilteredList from './components/AnimeFilteredList';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ borderBottom: '2px solid #333', paddingBottom: '8px' }}>Anime Analytics Dashboard</h1>
      
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
        <KpiCard title="Топ за рейтингом" value="Frieren" trend="⭐ 9.14 (Топ 1)" />
        <KpiCard title="Найпопулярніший жанр" value="Екшен" trend="45% тайтлів сезону" />
        <KpiCard title="Середня оцінка" value="8.4" trend="+0.2 з минулого сезону" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
        <EpisodeCounter />
        <ThemeToggle />
        <AnimeFilteredList />
      </div>
    </div>
  );
}

export default App;