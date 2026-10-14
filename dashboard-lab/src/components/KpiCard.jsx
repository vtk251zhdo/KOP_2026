import React from 'react';

const KpiCard = ({ title, value, trend }) => {
  const isPositive = trend.startsWith('+') || trend === 'Топ 1';
  
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', minWidth: '200px' }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#555', fontSize: '16px' }}>{title}</h3>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{value}</div>
      <div style={{ color: isPositive ? '#10b981' : '#6b7280', fontSize: '14px', marginTop: '4px' }}>
        {trend}
      </div>
    </div>
  );
};

export default KpiCard;