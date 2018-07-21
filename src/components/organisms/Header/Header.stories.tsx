// @ts-ignore
import styles from '@sambego/storybook-styles';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Header from './Header';

storiesOf('organisms/Header', module)
  .addDecorator(styles({ width: '100vw' }))
  .add('basic Header', () => <Header menuOnClick={action('Toggle sidebar')} />);
