import React, { useState } from 'react';

const EpisodeCounter = () => {
  const [episodesWatched, setEpisodesWatched] = useState(0);
  const totalEpisodes = 24; 

  const handleIncrement = () => {
    if (episodesWatched < totalEpisodes) setEpisodesWatched(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (episodesWatched > 0) setEpisodesWatched(prev => prev - 1);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <h3>Трекер перегляду</h3>
      <p style={{ color: '#666', margin: '4px 0 12px' }}>Jujutsu Kaisen (Сезон 2)</p>
      
      <div style={{ fontSize: '24px', marginBottom: '12px' }}>
        {episodesWatched} / {totalEpisodes} <span style={{ fontSize: '16px', color: '#888' }}>еп.</span>
      </div>
      
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={handleDecrement} disabled={episodesWatched === 0}>− 1 еп.</button>
        <button onClick={handleIncrement} disabled={episodesWatched === totalEpisodes}>+ 1 еп.</button>
        <button onClick={() => setEpisodesWatched(0)}>Скинути</button>
      </div>
    </div>
  );
};

export default EpisodeCounter;