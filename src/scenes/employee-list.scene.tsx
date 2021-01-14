import { routes } from 'core';
import React from 'react';
import { Link } from 'react-router-dom';

export const EmployeeListScene: React.FC = () => {
  return (
    <>
      <h1>Hello from Employee List Scene</h1>
      <Link to={routes.editEmployee('232')}>Navigate to edit employee 232</Link>
    </>
    );
};