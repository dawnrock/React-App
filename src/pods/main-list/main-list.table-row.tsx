import React from 'react';
import { MainListEntity } from './main-list.vm' ;
import {routes} from 'core/router';
import { Link } from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

interface Props {
  mainListMember: MainListEntity;
}

export const MainListTableRow: React.FC<Props> = (props) => {
    const { mainListMember } = props;
  
    return (
      <>
        
        <TableRow key={mainListMember.id} >
          <TableCell>
            <img src={mainListMember.avatar_url} style={{ width: "10rem" }} />
          </TableCell>
                           
          <TableCell align="right">
            <Link to={routes.editMember(mainListMember.login)}>{mainListMember.login}</Link>
          </TableCell>
          <TableCell align="right">{mainListMember.name}</TableCell>
          <TableCell align="right">{mainListMember.email}</TableCell>
         </TableRow>
               
      </>
    );
};


