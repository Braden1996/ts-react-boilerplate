// @ts-ignore
import styles from "@sambego/storybook-styles";
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Sidebar from './Sidebar';

storiesOf('organisms/Sidebar', module)
  .addDecorator(styles({height: '100vh'}))
  .add('basic Sidebar', () => <Sidebar />);
