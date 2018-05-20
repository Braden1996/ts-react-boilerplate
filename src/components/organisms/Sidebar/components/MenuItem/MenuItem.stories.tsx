// @ts-ignore
import styles from '@sambego/storybook-styles';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import MdCake from 'react-icons/lib/md/cake';

import MenuItem from './MenuItem';

storiesOf('organisms/Sidebar/MenuItem', module)
  .addDecorator(styles({ width: '200px' }))
  .add('basic MenuItem', () => (
    <MenuItem to="/hello-world">Hello world!</MenuItem>
  ))
  .add('basic svg MenuItem', () => (
    <MenuItem to="/hello-world"><MdCake />Hello world!</MenuItem>
  ))
  .add('multiple MenuItem', () => (
    <ul>
      {['Apple', 'Banana', 'Cherry'].map(option => (
        <MenuItem key={option} to={`/${option}`}>{option}!</MenuItem>
      ))}
    </ul>
  ));
