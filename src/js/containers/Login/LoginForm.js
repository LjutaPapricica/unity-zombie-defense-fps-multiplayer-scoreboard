import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from 'components/Login/LoginForm';

class LoginFormContainer extends Component {
    static propTypes = {
        onLogin: PropTypes.func
    }
    state = {
        id: '',
        password: ''
    }
    login = (ev) => {
        ev.preventDefault();
        this.props.onLogin(this.state);
    }
    updateField = (key, ev) => {
        this.setState({
            [key]: ev.target.value
        });
    }
    render() {
        const { id, password } = this.state;

        return (
            <LoginForm id={id} password={password} onSubmit={this.login} onFieldUpdated={this.updateField} />
        );
    }
}

export default LoginFormContainer;