import React from 'react';
import { MainListTableRow } from "./main-list.table-row";
import {useDebounce} from 'use-debounce';
import {MainListEntity} from './main-list.vm';


export const MainListComponent: React.FC = () => {

  const [listFilter, setListFilter] = React.useState("lemoncode");
  const [debouncedFilter] = useDebounce(listFilter, 2000);
  const [mainList, setMainList] = React.useState<MainListEntity[]>([]);

  React.useEffect(() => {
        fetch(`https://api.github.com/orgs/${listFilter}/members`)
          .then((response) =>  response.json())
          .then((json) => setMainList(json)
          );
  }, [debouncedFilter]);
  
  return (
    <> 
      <input value={listFilter} onChange={(e) => setListFilter(e.target.value)}/>
      <h2>Bienvenido al buscador de usuarios de la API GitHub</h2> 
      <table>
         <thead>           
          <tr>
            <th>Avatar</th>
            <th>Name</th>
          </tr>
          </thead>
          
          <tbody>
            
            {mainList.map((mainListMember) => (
              <MainListTableRow key={mainListMember.id} mainListMember={mainListMember} />
            ))}
            
          </tbody>

      </table>
    </>
  );
};