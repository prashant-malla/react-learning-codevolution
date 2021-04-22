import React, { Component } from 'react';

class Message extends Component {
    state = {
        message: 'Hello Everyone, nice to meet you!',
        name: "Prashant Malla"
    }

    subscribe() {
        console.log('reached to subscribe function after clicking button');
        this.setState({
            message: 'Thank you for subscribing!'
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.subscribe()}>Subscribe</button>
            </>
        );
    }
}

export default Message;