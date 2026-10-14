import React, { useState } from 'react';

const MOCK_ANIME = [
  { id: 1, title: 'Frieren: Beyond Journey\'s End', genre: 'Фентезі', rating: 9.1, episodes: 28, studio: 'Madhouse', desc: 'Ельфійка-маг вирушає в нову подорож, щоб пізнати людей.' },
  { id: 2, title: 'Attack on Titan', genre: 'Екшен', rating: 9.0, episodes: 89, studio: 'MAPPA', desc: 'Остання битва людства проти титанів.' },
  { id: 3, title: 'Steins;Gate', genre: 'Фантастика', rating: 9.1, episodes: 24, studio: 'White Fox', desc: 'Група друзів винаходить спосіб надсилати повідомлення в минуле.' },
  { id: 4, title: 'Jujutsu Kaisen', genre: 'Екшен', rating: 8.6, episodes: 47, studio: 'MAPPA', desc: 'Старшокласник приєднується до таємної організації магів.' },
  { id: 5, title: 'Mushoku Tensei', genre: 'Фентезі', rating: 8.4, episodes: 48, studio: 'Studio Bind', desc: 'Переродження в іншому світі з магією та мечами.' },
];

const AnimeFilteredList = () => {
  const [filter, setFilter] = useState('Всі');
  const [expandedId, setExpandedId] = useState(null); // Стан для дрілдауну

  const genres = ['Всі', 'Екшен', 'Фентезі', 'Фантастика'];

  const filteredItems = filter === 'Всі' 
    ? MOCK_ANIME 
    : MOCK_ANIME.filter(item => item.genre === filter);

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', gridColumn: '1 / -1' }}>
      <h3>Топ Аніме (Фільтр + Дрілдаун)</h3>
      
      <select 
        value={filter} 
        onChange={(e) => {
          setFilter(e.target.value);
          setExpandedId(null); // Закриваємо розгорнуті елементи при зміні фільтра
        }}
        style={{ marginBottom: '16px', padding: '6px' }}
      >
        {genres.map(g => <option key={g} value={g}>{g}</option>)}
      </select>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {filteredItems.map(anime => (
          <li key={anime.id} style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
            <div 
              style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', fontWeight: 'bold' }}
              onClick={() => setExpandedId(expandedId === anime.id ? null : anime.id)}
            >
              <span>{anime.title} ({anime.genre})</span>
              <span>⭐ {anime.rating}</span>
            </div>
            
            {/* Реалізація дрілдауну (умовний рендеринг) */}
            {expandedId === anime.id && (
              <div style={{ marginTop: '8px', padding: '12px', backgroundColor: '#f9f9f9', borderRadius: '4px', fontSize: '14px' }}>
                <p style={{ margin: '0 0 8px' }}><strong>Опис:</strong> {anime.desc}</p>
                <p style={{ margin: '0 0 4px' }}><strong>Студія:</strong> {anime.studio}</p>
                <p style={{ margin: '0' }}><strong>Кількість епізодів:</strong> {anime.episodes}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeFilteredList;