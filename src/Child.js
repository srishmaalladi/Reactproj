// import React from 'react';

// const Child = ({ onButtonClick }) => {
//   return (
//     <div>
//       <h2>I am the Child</h2>
//       <button onClick={onButtonClick}>Click Me</button>
//     </div>
//   );
// };

// export default Child;
import React, { Component } from 'react';

class Child extends Component {
  render() {
    const { onButtonClick } = this.props;

    return (
      <div>
        <h2>I am the Child</h2>
        <button onClick={onButtonClick}>Click Me</button>
      </div>
    );
  }
}

export default Child;
