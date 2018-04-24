import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { theme } from '@theme';

import store from '../store';
import { history } from '../store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export default function bootstrap() {
  ReactDOM.render(
    <App
      store={store}
      history={history}
      theme={theme}
    />,
    document.getElementById('root') as HTMLElement
  );
  registerServiceWorker();
}
