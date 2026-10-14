import React, { useState } from 'react';

const Toggle = () => {
  const [isDark, setIsDark] = useState(false);

  const widgetStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: isDark ? '#333' : '#fff',
    color: isDark ? '#fff' : '#000',
    transition: 'all 0.3s'
  };

  return (
    <div style={widgetStyle}>
      <h3>{isDark ? 'Темна тема' : 'Світла тема'}</h3>
      <p>Стан перемикача керує стилями цього блоку.</p>
      <button onClick={() => setIsDark(!isDark)}>
        Перемкнути на {isDark ? 'світлу' : 'темну'}
      </button>
    </div>
  );
};

export default Toggle;