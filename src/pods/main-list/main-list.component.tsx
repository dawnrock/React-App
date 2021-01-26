import React from 'react';
import { MainListTableRow } from "./main-list.table-row";
import {useDebounce} from 'use-debounce';
import {MainListEntity} from './main-list.vm';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

interface Props {
  mainList: MainListEntity[],
  listFilter: string,
  setListFilter: (filter: string) => void, 
}

export const MainListComponent: React.FC<Props> = (props) => {
  const {mainList, listFilter, setListFilter} = props;
  

  return (
    <>  
      <input value={listFilter} onChange={(e) => setListFilter(e.target.value)}/>
      
      <h2>Bienvenido al buscador de usuarios de la API GitHub</h2> 
  
      <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="right">Activo</TableCell>
                <TableCell align="right">Id</TableCell>
                <TableCell align="right">Nombre</TableCell>
                <TableCell align="right">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {mainList.map((mainListMember) => (
        <MainListTableRow key={mainListMember.id} mainListMember={mainListMember} />
      ))}  
            </TableBody>
          </Table>
        </TableContainer>      
    </>
  );
};