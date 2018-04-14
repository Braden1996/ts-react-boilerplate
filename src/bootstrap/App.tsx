import * as React from 'react';

import {Home} from '@pages';
import {theme, ThemeProvider} from '@theme';

class App extends React.Component {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
