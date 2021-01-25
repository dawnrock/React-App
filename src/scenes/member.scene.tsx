import { routes } from 'core';
import React from 'react';
import { Link } from 'react-router-dom';
import {MemberComponent} from 'pods/member';
import {CenteredLayout} from 'layouts';

export const MemberScene: React.FC = () => {
  return (
    <>
      <CenteredLayout>
        <h1>Página de usuario</h1>
        <MemberComponent/>
        <div>
          <Link to={routes.mainList}>Volver al buscador de empresas</Link>
        </div>
      </CenteredLayout>
    </>
    );
};