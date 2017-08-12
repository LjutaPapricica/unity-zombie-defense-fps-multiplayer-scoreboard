import React, { Component } from 'react';
import Login from 'components/Login';
import { redirect } from 'store';
import xhr from 'xhr';
import { getAPIAddress } from 'utilities';
import { connect } from 'react-redux';
import { setToken } from 'actions/auth';

@connect()
class LoginContainer extends Component {
    login = async (formData) => {
        try {
            const result = await xhr.post(getAPIAddress('auth'), {
                id: formData.id,
                password: formData.password
            });

            this.props.dispatch(setToken(result.token));

            redirect('/scoreboard');
        }
        catch(err) {
            alert(err.message);
        }
    }
    render() {
        return <Login onLogin={this.login} />;
    }
}

export default LoginContainer;