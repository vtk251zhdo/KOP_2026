import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <h3>Лічильник (Степпер)</h3>
      <div style={{ fontSize: '24px', marginBottom: '12px' }}>{count}</div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => setCount(prev => prev - 1)}>− 1</button>
        <button onClick={() => setCount(prev => prev + 1)}>+ 1</button>
        <button onClick={() => setCount(0)}>Скинути</button>
      </div>
    </div>
  );
};

export default Counter;