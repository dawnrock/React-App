import React from 'react';
import { MainListEntity } from './main-list.vm' ;
import {routes} from 'core/router';
import { Link } from 'react-router-dom';


interface Props {
  mainListMember: MainListEntity;
}

export const MainListTableRow: React.FC<Props> = (props) => {
    const { mainListMember } = props;
  
    return (
      <tr>
        <td>
          <img src={mainListMember.avatar_url} style={{ width: "10rem" }} />
        </td>
        <td>
          <Link to={routes.editMember(mainListMember.login)}>{mainListMember.login}</Link>
        </td>                
      </tr>
    );
};


