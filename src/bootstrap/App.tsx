import { History } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Store } from 'redux';

import {Home} from '@pages';
import {theme as theTheme, ThemeProvider} from '@theme';

interface IProps {
  store: Store<any>;
  history: History;
  theme: typeof theTheme
}

export default class App extends React.Component<IProps, {}> {
  public render() {
    const { store, history, theme } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <Route
              exact={true}
              path="/"
              component={Home}
            />
          </ConnectedRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}
