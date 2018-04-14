import * as React from 'react';
import { ThemeProvider } from 'styled-components'

import { theme } from '@theme';

export default function init(storybook) {
  storybook.addDecorator((story) => (
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  ))
}
