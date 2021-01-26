import React from 'react';
import {MemberEntity, createDefaultMember} from './member.vm';
import {useParams} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


interface MemberParams {
  userLogin: string;
}

export const MemberComponent: React.FC = () => {
  const [member, setMember] = React.useState<MemberEntity>(
    createDefaultMember()
  )
  const {userLogin} = useParams<MemberParams>();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${userLogin}`)
    .then((response) => response.json())
    .then((json) => setMember(json));
  }, [] );
  
  return (  
      <>
      
      
      <Card>  
        <img src={member.avatar_url} style={{ width: "25rem" }} />
        <CardContent>
          <h2>Nick de usuario:  {member.login}</h2>
          <p>Nombre de usuario:  {member.name}</p>
          <p>Empresa de usuario:  {member.company}</p>
          <p>Bio de usuario:  {member.bio}</p>
        </CardContent>
      </Card>
        
      </>
  )
}