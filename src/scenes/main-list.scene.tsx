import { routes } from 'core/router';
import React from 'react';
import { Link } from 'react-router-dom';
import {MainListContainer} from 'pods/main-list';
import {CenteredLayout} from 'layouts';


export const MainListScene: React.FC = () => {
  return (
    <>
      <h1>Bienvenido al buscador de usuarios de la API GitHub</h1>
      <CenteredLayout>
        <MainListContainer />
      </CenteredLayout>
            
    </>
    );
};