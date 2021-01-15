import { routes } from 'core/router';
import React from 'react';
import { Link } from 'react-router-dom';


export const SubmoduleListScene: React.FC = () => {
  return (
    <>
      <h1>Hello from Submodel List Scene</h1>
      <Link to={routes.employees}>Navigate to employee list</Link>
    </>
    );
};