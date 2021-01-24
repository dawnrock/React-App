import React from  'react';
import Button from '@material-ui/core/Button';
import { routes } from 'core';
import { Link } from 'react-router-dom';
import { MainListComponent } from './main-list.component';



export const MainListContainer: React.FC = () => {

    return  (
        <>
            <MainListComponent  />
            <Link to={routes.member}>Ir a página de miembro</Link>
            <Link to={routes.login}>Volver al inicio</Link>
            <Button type="button" variant="contained" color="primary">
              Buscar
            </Button>
        </>
    )  
}