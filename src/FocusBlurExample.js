import React, { useState } from 'react';

function FocusBlurExample() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h3>Focus & Blur Example</h3>
      <input
        type="text"
        placeholder="Click to focus"
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          padding: '10px',
          outline: 'none',
          border: '2px solid',
          borderColor: isFocused ? 'dodgerblue' : 'gray',
          borderRadius: '5px',
          transition: 'border-color 0.3s',
        }}
      />
      <p>{isFocused ? 'Input is focused' : 'Input is not focused'}</p>
    </div>
  );
}

export default FocusBlurExample;
