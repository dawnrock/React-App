import React from  'react';
import { routes } from 'core';
import { Link } from 'react-router-dom';
import { MemberComponent } from './member.component';



export const MemberContainer: React.FC = () => {

    return  (
        <>
            <h1>Página de usuario</h1>
            <MemberComponent/>
            <Link to={routes.mainList}>Volver al buscador de empresas</Link>
        </>
    )  
}