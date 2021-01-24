import React from 'react';
import { MainListEntity } from './main-list.vm' ;
import {routes} from 'core/router';
import { Link } from 'react-router-dom';


interface Props {
  mainListEntityRow: MainListEntity;
}

export const MainListTableRow: React.FC<Props> = (props) => {
    const { mainListEntityRow } = props;
  
    return (
      <tr>
        <td>
          <img src={mainListEntityRow.avatar_url} style={{ width: "10rem" }} />
        </td>
        <td>
          {<Link to={routes.editMember(mainListEntityRow.id)}>{mainListEntityRow.login}</Link>}
        </td>                
      </tr>
    );
};


