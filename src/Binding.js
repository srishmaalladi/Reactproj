import React, { Component } from 'react';

class Binding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            value: prevState.value + 1,
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <div>{this.state.value}</div> 
            </div>
        );
    }
}

export default Binding;
