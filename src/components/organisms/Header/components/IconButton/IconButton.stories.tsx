import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import MdDashboard from 'react-icons/lib/md/dashboard';

import styled from '@theme';

import UnstyledIconButton from './IconButton';

const IconButton = styled(UnstyledIconButton)`
  width: 64px;
  height: 64px;
`;

storiesOf('organisms/Header/IconButton', module)
  .add('basic IconButton', () => (
    <IconButton onClick={action('Toggle sidebar')}>
      <MdDashboard size={32} />
    </IconButton>
  ));
