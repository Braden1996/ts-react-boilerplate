import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { theme } from '@theme';

import configureStore from '../store';
import history from '../store/history';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <App store={configureStore()} history={history} theme={theme} />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
