import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import injectGlobalStyle from '../../src/bootstrap/globalStyle';

import { theme } from '@theme';

export default function init(storybook) {
  storybook.addDecorator((story) => {
    injectGlobalStyle();
    return (
      <ThemeProvider theme={theme}>
        {story()}
      </ThemeProvider>
    );
  });
}
