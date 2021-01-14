import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';

import AppContext from "../context/appContext";

const Login = () => {
    const { login, isLoggedIn } = useContext(AppContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        login(event.target.username.value, event.target.password.value);
    }

    return (
        <div className="App">
            {isLoggedIn && <Redirect to="/"/>}
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username"/><br/><br/>
                <input type="password" name="password" placeholder="Password"/><br/><br/>
                <input type="submit"/><br/>
            </form>
        </div>
    );
}

export default Login;