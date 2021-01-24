import { routes } from 'core';
import React from  'react';
import { useHistory } from 'react-router-dom';
import { isValidLogin } from './login.api';
import {LoginComponent} from './login.component';
import { Login } from './login.vm';


export const LoginContainer: React.FC = () => {
    const history = useHistory();

    const loginSucceeded = (isValid: boolean) : void => {
        if(isValid) {
            history.push(routes.mainList);
        } else {
            alert('Invalid login');
        }
    };

    const handleLogin = (login : Login) => {
        isValidLogin(login.user, login.password).then(loginSucceeded);
    }

    return <LoginComponent onLogin={handleLogin}  />;  
    
};