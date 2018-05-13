import { History } from 'history';
import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Store } from 'redux';

import {theme as theTheme, ThemeProvider} from '@theme';

import Router from './Router';

interface IProps {
  store: Store<any>;
  history: History;
  theme: typeof theTheme;
}

export default class App extends React.Component<IProps, {}> {
  public render() {
    const { store, history, theme } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <Router />
          </ConnectedRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}
