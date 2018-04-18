// @ts-ignore
import styles from "@sambego/storybook-styles";
import { text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import GenericTemplate from './GenericTemplate';

storiesOf('templates/GenericTemplate', module)
  .addDecorator(styles({ width: '100vw'}))
  .add('basic GenericTemplate', () => (
    <GenericTemplate>
      <p>{text('Page content', 'Hello world!')}</p>
    </GenericTemplate>
  ))
