import React, { PureComponent, Component } from 'react';

// Child is PureComponent
class Child extends PureComponent {
  render() {
    console.log('👶 Child rendered');
    return <h2>I'm a Pure Child!</h2>;
  }
}

// Parent updates its own state frequently
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentCount: 0
    };
  }

  increment = () => {
    this.setState({ parentCount: this.state.parentCount + 1 });
  };

  render() {
    console.log('🧓 Parent rendered');
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Parent Count: {this.state.parentCount}</h1>
        <button onClick={this.increment}>Increment Parent Count</button>
        <Child />
      </div>
    );
  }
}

export default Parent;
