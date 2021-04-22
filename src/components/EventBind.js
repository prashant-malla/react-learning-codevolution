import React, { Component } from 'react'

class EventBind extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Hello world'
        }
    }
    handleClick() {
        this.setState({
            message: 'You clicked a button'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={() => this.handleClick()}>Click</button>
                <button onClick={this.handleClick.bind(this)}>Click</button>
                {/* <button onClick={this.handleClick}>Click</button> */}
            </div>
        )
    }
}

export default EventBind
