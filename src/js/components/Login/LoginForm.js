import React from 'react';

const LoginForm = ({ id, password, onSubmit, onFieldUpdated }) => (
    <form className="loginForm" onSubmit={onSubmit}>
        <label>ID</label>
        <input type="text" value={id} onChange={onFieldUpdated.bind(null, "id")} />

        <label>Password</label>
        <input type="password" value={password} onChange={onFieldUpdated.bind(null, "password")} />

        <input type="submit" value="Login" />
    </form>
);

export default LoginForm;