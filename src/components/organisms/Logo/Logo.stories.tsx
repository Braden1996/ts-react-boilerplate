// @ts-ignore
import styles from "@sambego/storybook-styles";
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Logo from './Logo';

storiesOf('organisms/Logo', module)
  .addDecorator(styles({width: '100vw', height: '100vh'}))
  .add('basic Logo', () => <Logo />);
