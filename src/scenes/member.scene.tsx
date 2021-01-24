import { routes } from 'core';
import React from 'react';
import { Link } from 'react-router-dom';

export const MemberScene: React.FC = () => {
  return (
    <>
      <h1>Detalle del usuario</h1>
      <div>
      <Link to={routes.mainList}>Volver al buscador de empresas</Link>
      </div>
      
    </>
    );
};