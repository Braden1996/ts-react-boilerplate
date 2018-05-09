import { storiesOf } from '@storybook/react';
import * as React from 'react';

import styled from '@theme';

import UnstyledSidebar from './Sidebar';

const Sidebar = styled(UnstyledSidebar)`
  width: 220px;
  height: 100vh;
`;

storiesOf('organisms/Sidebar', module)
  .add('basic Sidebar', () => <Sidebar />);
