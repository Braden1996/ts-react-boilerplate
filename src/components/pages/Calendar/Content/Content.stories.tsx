import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Content from './Content';

storiesOf('pages/Calendar', module)
  .add('basic Content', () => <Content />);
