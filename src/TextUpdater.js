import React, { useState } from 'react';

function TextUpdater() {
  const [text, setText] = useState('Hello! Click the button to change this text.');

  const handleClick = () => {
    setText('You clicked the button! 🎉');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>{text}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default TextUpdater;
