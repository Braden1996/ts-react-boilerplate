import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Button from './Button';

storiesOf('atoms/tags/Button', module).add('basic Button', () => (
  <Button
    size={select('Size', ['small', 'medium', 'large'], 'medium') as any}
    disabled={boolean('Disabled', false)}
    onClick={action('button-clicked')}
  >
    Click me
  </Button>
));
