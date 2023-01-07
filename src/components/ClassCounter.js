import React from 'react';
import '../styles/style.css';

class ClassCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({counter: this.state.counter + 1})
    }

    decrement() {
        this.setState({counter: this.state.counter - 1})
    }

    render() {
        return (
            <div className='Test'>
                <div>{this.state.counter}</div>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        );
    }
}

export default ClassCounter;