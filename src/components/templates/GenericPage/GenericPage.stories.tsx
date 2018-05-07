// @ts-ignore
import styles from "@sambego/storybook-styles";
import { text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import GenericPage from './GenericPage';

storiesOf('templates/GenericPage', module)
  .addDecorator(styles({ width: '100vw'}))
  .add('basic GenericPage', () => (
    <GenericPage>
      <p>{text('Page content', 'Hello world!')}</p>
    </GenericPage>
  ));
