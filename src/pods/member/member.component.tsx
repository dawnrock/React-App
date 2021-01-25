import React from 'react';
import {MemberEntity, createDefaultMember} from './member.vm';
import {useParams} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



interface MemberParams {
  id:string;
}

export const MemberComponent: React.FC = () => {
  const [member, setMember] = React.useState<MemberEntity>(
    createDefaultMember()
  )
  const {id} = useParams<MemberParams>();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then((response) => response.json())
    .then((json) => setMember(json));
  }, [] );
  
  return (
      <>
      <img src={member.avatar_url} style={{ width: "25rem" }} />
      <Card>
        
        <CardContent>
        <h2>Nick de usuario:  {id}</h2>
        <p>Nombre de usuario:  {member.name}</p>
        <p>Empresa de usuario:  {member.company}</p>
        <p>Bio de usuario:  {member.bio}</p>
        </CardContent>
      </Card>
        
      </>
  )
}