import React, { useState } from 'react';

const MOCK_DATA = [
  { id: 1, name: 'Сенсор температури A1', category: 'Датчики' },
  { id: 2, name: 'Головний сервер', category: 'Мережа' },
  { id: 3, name: 'Сенсор вологості B2', category: 'Датчики' },
  { id: 4, name: 'Роутер TP-Link', category: 'Мережа' },
  { id: 5, name: 'ДБЖ (UPS) 1000V', category: 'Живлення' },
];

const FilteredList = () => {
  const [filter, setFilter] = useState('Всі');

  const categories = ['Всі', 'Датчики', 'Мережа', 'Живлення'];

  const filteredItems = filter === 'Всі' 
    ? MOCK_DATA 
    : MOCK_DATA.filter(item => item.category === filter);

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <h3>Обладнання (Міні-список)</h3>
      
      <select 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: '12px', padding: '4px' }}
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <ul style={{ paddingLeft: '20px', margin: 0 }}>
        {filteredItems.map(item => (

          <li key={item.id} style={{ marginBottom: '4px' }}>
            <strong>{item.name}</strong> 
            <span style={{ color: '#888', fontSize: '12px', marginLeft: '8px' }}>
              ({item.category})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;