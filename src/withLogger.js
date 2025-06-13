
import React from 'react';

function withLogger(WrappedComponent) {
  return function NewComponent(props) {
    console.log("Component is showing on the screen");
    return <WrappedComponent {...props} />;
  };
}

export default withLogger;
