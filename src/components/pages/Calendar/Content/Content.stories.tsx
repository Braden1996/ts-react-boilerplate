// @ts-ignore
import styles from "@sambego/storybook-styles";
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Content from './Content';

storiesOf('pages/Calendar', module)
  .addDecorator(styles({width: '100vw', height: '100vh'}))
  .add('basic Content', () => <Content />);
