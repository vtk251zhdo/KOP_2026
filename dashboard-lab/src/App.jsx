import React from 'react';
import KpiCard from './components/KpiCard';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import FilteredList from './components/FilteredList';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Аналітичний Дашборд</h1>
      
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {}
        <KpiCard title="Користувачі онлайн" value="1,245" trend="+12.5%" />
        <KpiCard title="Навантаження CPU" value="45%" trend="-2.1%" />
        <KpiCard title="Активні помилки" value="3" trend="+1" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
        <Counter />
        <Toggle />
        <FilteredList />
      </div>
    </div>
  );
}

export default App;