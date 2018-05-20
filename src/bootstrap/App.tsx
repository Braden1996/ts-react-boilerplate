import { ThemeProvider } from 'emotion-theming';
import { History } from 'history';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Store } from 'redux';

import { theme as theTheme } from '@theme';

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
            <>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Fitness App</title>
              </Helmet>
              <Router />
            </>
          </ConnectedRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}
