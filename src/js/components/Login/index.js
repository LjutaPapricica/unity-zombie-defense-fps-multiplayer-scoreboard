import React from 'react';
import LoginFormContainer from 'containers/Login/LoginForm';
import './Login.scss';

const Login = ({ onLogin }) => (
    <div className="view-login">
        <h1>Unity Zombie Defense FPS Co-op Dashboard</h1>
        <h2>Login to Access.</h2>

        <LoginFormContainer onLogin={onLogin} />
    </div>
);

export default Login;