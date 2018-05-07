// @ts-ignore
import styles from "@sambego/storybook-styles";
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import MenuHeader from './MenuHeader';

storiesOf('organisms/Sidebar/MenuHeader', module)
  .add('basic MenuHeader', () => (
    <MenuHeader>Menu</MenuHeader>
  ));
