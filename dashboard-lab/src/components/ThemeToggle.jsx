import React, { useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const widgetStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: isDark ? '#1a1a1a' : '#fff',
    color: isDark ? '#e5e5e5' : '#1a1a1a',
    transition: 'all 0.3s'
  };

  return (
    <div style={widgetStyle}>
      <h3>{isDark ? 'Нічний режим (Otaku)' : 'Денний режим'}</h3>
      <p>Зміна теми для комфортного перегляду списків.</p>
      <button 
        onClick={() => setIsDark(!isDark)}
        style={{ marginTop: '8px', padding: '6px 12px' }}
      >
        Увімкнути {isDark ? 'світлу' : 'темну'}
      </button>
    </div>
  );
};

export default ThemeToggle;