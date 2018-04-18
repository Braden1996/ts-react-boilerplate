import { storiesOf } from '@storybook/react';
import * as React from 'react';

import HomeContent from './HomeContent';

storiesOf('pages/Home/Content', module)
  .add('basic HomeContent', () => <HomeContent />)
