import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { theme } from '@theme';

import store, { history } from '../store';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App
      store={store}
      history={history}
      theme={theme}
    />,             div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
