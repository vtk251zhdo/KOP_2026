import React from 'react';

const FilterForm = ({ filters, setFilters, onReset }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label htmlFor="search">Пошук за назвою</label>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Наприклад: Naruto..."
          value={filters.search}
          onChange={handleChange}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label htmlFor="status">Статус</label>
        <select name="status" id="status" value={filters.status} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px' }}>
          <option value="">Всі статуси</option>
          <option value="current">Виходить зараз</option>
          <option value="finished">Завершено</option>
          <option value="upcoming">Анонс</option>
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label htmlFor="sort">Сортування</label>
        <select name="sort" id="sort" value={filters.sort} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px' }}>
          <option value="-averageRating">За рейтингом (спадання)</option>
          <option value="averageRating">За рейтингом (зростання)</option>
          <option value="-createdAt">Найновіші</option>
        </select>
      </div>

      <button type="button" onClick={onReset} style={{ padding: '8px 16px', cursor: 'pointer', height: '35px' }}>
        Скинути фільтри
      </button>
    </form>
  );
};

export default FilterForm;