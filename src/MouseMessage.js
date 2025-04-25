import React, { useState } from 'react';

const MouseMessage = () => {
  const [message, setMessage] = useState('');

  const handleMouseEnter = () => {
    setMessage('Mouse is over the element!');
  };

  const handleMouseLeave = () => {
    setMessage('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: '20px',
          backgroundColor: '#e0e0e0',
          borderRadius: '10px',
          display: 'inline-block',
          cursor: 'pointer'
        }}
      >
        Hover over me!
      </div>
      {message && (
        <p style={{ marginTop: '20px', color: 'green', fontWeight: 'bold' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default MouseMessage;
