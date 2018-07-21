import { boolean } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import H1 from './H1';

storiesOf('atoms/tags/H1', module)
  .add('basic H1', () => <H1 glow={boolean('Glow', false)}>Glowing</H1>)
  .add('emoji H1', () => <H1 glow={boolean('Glow', true)}>💩🧠🎁🚀</H1>);
