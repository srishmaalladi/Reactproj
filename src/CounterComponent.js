import React, { useState, useEffect } from 'react';

function CounterComponent() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [welcome, setWelcome] = useState('');

  // ✅ useEffect with dependency [count] - runs on every count change
  useEffect(() => {
    if (count % 2 === 0) {
      setMessage('Even number!');
    } else {
      setMessage('Odd number!');
    }
  }, [count]);

  // ✅ useEffect with empty dependency [] - runs only once (on mount)
  useEffect(() => {
    setWelcome('Welcome! This message appears only once.');
    console.log('Component mounted!');
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Count: {count}</h2>
      <p>{message}</p>
      <p>{welcome}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
    </div>
  );
}

export default CounterComponent;
