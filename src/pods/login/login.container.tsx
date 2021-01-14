import { CenteredLayout } from 'layouts';
import { CenteredLayout } from 'layouts';
import React from  'react';
import {LoginComponent} from './login.component';



export const LoginContainer: React.FC = () => {
    return (
        <CenteredLayout>
            <LoginComponent />
        </CenteredLayout>
    );
};