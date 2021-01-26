import React from  'react';
import Button from '@material-ui/core/Button';
import { routes } from 'core';
import { Link } from 'react-router-dom';
import { MainListComponent } from './main-list.component';
import {useDebounce} from 'use-debounce';
import {MainListEntity} from './main-list.vm';

export const MainListContainer: React.FC = () => {

    const [listFilter, setListFilter] = React.useState("lemoncode");
  const [debouncedFilter] = useDebounce(listFilter, 2000);
  const [mainList, setMainList] = React.useState<MainListEntity[]>([]);

  React.useEffect(() => {
        fetch(`https://api.github.com/orgs/${listFilter}/members`)
          .then((response) =>  response.json())
          .then((json) => setMainList(json)
          );
  }, [debouncedFilter]);

    
    return  (
        <>
            <MainListComponent listFilter={listFilter} mainList={mainList} setListFilter={setListFilter}/>
            <Link to={routes.member}>Ir a página de miembro</Link>
            <Link to={routes.login}>Volver al inicio</Link>
            
        </>
    )  
}