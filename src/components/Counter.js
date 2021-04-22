import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }

    increment() {
        console.log(this.state.count);
        // this.setState({
        //     count: this.state.count + 1
        // }, () => console.log('call back value: ', this.state.count))
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }
    decrement() {
        console.log(this.state.count);
        this.setState({
            count: this.state.count - 1
        })
    }
    incrementByFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <>
                <button onClick={() => this.decrement()}>-</button>
                <p>{this.state.count}</p>
                <button onClick={() => this.incrementByFive()}>+</button>
            </>
        );
    }
}

export default Counter;