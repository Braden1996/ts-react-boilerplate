// @ts-ignore
import styles from '@sambego/storybook-styles';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Footer from './Footer';

storiesOf('organisms/Footer', module)
  .addDecorator(styles({ width: '100vw' }))
  .add('basic Footer', () => <Footer />);
