import * as React from 'react';
import { FaCalendarO } from "react-icons/lib/fa";
import { MdDashboard } from 'react-icons/lib/md';
import { matchPath } from 'react-router';
import { NavLinkProps } from 'react-router-dom';
import { $PropertyType } from 'utility-types';

import styled from '@theme';

import { MenuHeader, MenuItem } from './components';

const Container = styled.nav`
  padding-top: ${p => p.theme.dimensions.large}px;
  padding-bottom: ${p => p.theme.dimensions.tiny}px;
  background-color: ${p => p.theme.colors.wetAsphalt};

  > ${MenuHeader} {
    margin-bottom: ${p => p.theme.dimensions.small}px;
  }

  > ul > li {
    margin-bottom: ${p => p.theme.dimensions.tiny}px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

interface IProps {
  className?: string;
}

// tslint:disable
const isDashboardActive: $PropertyType<NavLinkProps, 'isActive'> =
  (match, {pathname}) => !!(
    matchPath('/', {path: pathname}) ||
    matchPath('/dashboard', {path: pathname})
  );

const Sidebar: React.SFC<IProps> = props => (
  <Container className={props.className}>
    <MenuHeader>App</MenuHeader>
    <ul>
      <li>
        <MenuItem to='/dashboard' isActive={isDashboardActive}>
          <MdDashboard />Dashboard
        </MenuItem>
      </li>
      <li><MenuItem to='/calendar'><FaCalendarO />Calendar</MenuItem></li>
    </ul>
  </Container>
);

export default Sidebar;
