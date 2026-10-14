import React from 'react';
import DashboardContainer from './components/DashboardContainer';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', color: '#fff' }}>
      <h1 style={{ borderBottom: '2px solid #555', paddingBottom: '8px', marginBottom: '24px' }}>
        Anime Analytics Dashboard (ЛР 3)
      </h1>
      
      {}
      <DashboardContainer />
    </div>
  );
}

export default App;