import { routes } from 'core';
import React from 'react';
import { Link } from 'react-router-dom';
import {CenteredLayout} from 'layouts';
import { MemberContainer } from 'pods/member/member.container';

export const MemberScene: React.FC = () => {
  return (
    <>
      <CenteredLayout>
        <MemberContainer/>
      </CenteredLayout>
    </>
    );
};