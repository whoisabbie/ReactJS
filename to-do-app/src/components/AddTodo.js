import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form style={{ display: 'flex' }} onSubmit={this.onSubmit} >
                <input
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add To-Do..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: 1 }}
                />
            </form>
        );
    }
}

AppTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AppTodo;