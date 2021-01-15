import { routes } from 'core';
import { LoginContainer } from 'pods/login';
import React from 'react';
import {Link} from 'react-router-dom';
import {CenteredLayout} from 'layouts';

export const LoginScene: React.FC = () => {
  return  (
  <CenteredLayout>
    <LoginContainer />
  </CenteredLayout>
  );  
};
