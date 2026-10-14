import React, { useState } from 'react';

const AnimeTable = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: 'rank', direction: 'asc' });

  const sortedAnime = [...data].sort((a, b) => {
    let aValue = a[sortConfig.key];
    let bValue = b[sortConfig.key];

    if (aValue === null) aValue = 0;
    if (bValue === null) bValue = 0;

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return ' ↕';
    return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
  };

  const thStyle = { padding: '12px', cursor: 'pointer', borderBottom: '2px solid #ccc', textAlign: 'left', background: '#f9f9f9' };
  const tdStyle = { padding: '12px', borderBottom: '1px solid #eee' };

  return (
    <div style={{ overflowX: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th onClick={() => requestSort('rank')} style={thStyle}>Ранг{getSortIcon('rank')}</th>
            <th onClick={() => requestSort('title')} style={thStyle}>Назва{getSortIcon('title')}</th>
            <th onClick={() => requestSort('type')} style={thStyle}>Тип{getSortIcon('type')}</th>
            <th onClick={() => requestSort('episodes')} style={thStyle}>Епізоди{getSortIcon('episodes')}</th>
            <th onClick={() => requestSort('score')} style={thStyle}>Оцінка{getSortIcon('score')}</th>
          </tr>
        </thead>
        <tbody>
          {sortedAnime.map((anime) => (
            <tr key={anime.mal_id} style={{ transition: 'background 0.2s' }}>
              <td style={tdStyle}>#{anime.rank}</td>
              <td style={tdStyle}>
                <strong>{anime.title_english || anime.title}</strong>
              </td>
              <td style={tdStyle}>{anime.type}</td>
              <td style={tdStyle}>{anime.episodes || 'Триває'}</td>
              <td style={tdStyle}>⭐ {anime.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimeTable;