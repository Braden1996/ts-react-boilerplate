import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import { theme } from '@theme';

import store, { history }  from '../store';
import App from './App';
import injectGlobalStyle from './globalStyle';
import registerServiceWorker from './registerServiceWorker';

const props = {store, history, theme}
const render = (MyApp: JSX.Element) =>
  ReactDOM.render(MyApp, document.getElementById('root') as HTMLElement)

function bootHot() {
  render(<AppContainer><App {...props} /></AppContainer>)

  module.hot!.accept('./App', () => {
    render(<AppContainer><App {...props} /></AppContainer>)
  })

  module.hot!.accept('../store/root-reducer', () => {
    const newRootReducer = require('../store/root-reducer').default;
    store.replaceReducer(newRootReducer);
  });
}

function bootCold() {
  render(<App {...props} />)
}

export default function bootstrap() {
  injectGlobalStyle();

  const isHot = process.env.NODE_ENV !== 'production' && module.hot
  isHot ? bootHot() : bootCold()

  registerServiceWorker();
}
