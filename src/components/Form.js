import React, { Component } from 'react';

// Three steps for handling form in react
// 1. add the html
// 2. assign the component state to the element value
// 3. assign the change handller that change the state

class Form extends Component {
    state = {
        name: '',
        message: '',
        topic: 'react'
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }
    handleMessageChange = event => {
        this.setState({
            message: event.target.value
        })
    }
    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`A name is: ${this.state.name}. The message is: ${this.state.message}. Interested topic is:  ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>NAME</label>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div>
                    <label>Message</label>
                    <textarea rows="3" value={this.state.message} onChange={this.handleMessageChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="laravel">Laravel</option>
                        <option value="nodejs">Node js</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}

export default Form;