import React from 'react';
import { MainListTableRow } from "./main-list.table-row";
import {useDebounce} from 'use-debounce';




export const MainListComponent: React.FC = () => {
  const [listFilter, setListFilter] = React.useState("lemoncode");
  const [debouncedFilter] = useDebounce(listFilter, 2000);
  const [mainList, setMainList] = React.useState([]);

  React.useEffect(() => {
        fetch(`https://api.github.com/orgs/${listFilter}/members`)
          .then((response) =>  response.json())
          .then((json) => setMainList(json.results ? json.results : []))
  }, [debouncedFilter]);
  
  return (
      <> 
        <input value={listFilter} onChange={(e) => setListFilter(e.target.value)}/> 
        <table>
          <thead>
                     
            <tr>
              <th>Avatar</th>
              <th>Name</th>
            </tr>
          </thead>
          
          <tbody>
            
            {mainList.map((member) => (
              <MainListTableRow key={member.id} mainListEntityRow={member} />
            ))}
            
          </tbody>

        </table>
      </>
  );
};