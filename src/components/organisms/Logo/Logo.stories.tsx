import { storiesOf } from '@storybook/react';
import * as React from 'react';

import styled from '@theme';

import UnstyledLogo from './Logo';

const Logo = styled(UnstyledLogo)`
  width: 220px;
  height: 73px;
`;

storiesOf('organisms/Logo', module)
  .add('basic Logo', () => <Logo />);
