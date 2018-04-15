import * as React from 'react';

import {Button} from '@atoms/tags';
import {theme, ThemeProvider} from '@theme';

class App extends React.Component {
  public render() {
    return <>
      <ThemeProvider theme={theme}>
        <Button>Hello world!</Button>
      </ThemeProvider>
    </>
  }
}

export default App;
