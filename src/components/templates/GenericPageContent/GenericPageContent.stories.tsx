// @ts-ignore
import styles from '@sambego/storybook-styles';
import { text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import GenericPageContent from './GenericPageContent';

storiesOf('templates/GenericPageContent', module)
  .addDecorator(styles({ width: '100vw', height: '100vh' }))
  .add('basic GenericPageContent', () => (
    <GenericPageContent>
      <p>{text('Page content', 'Hello world!')}</p>
    </GenericPageContent>
  ));
