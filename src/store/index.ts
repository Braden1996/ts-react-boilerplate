import createHistory from 'history/createBrowserHistory';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';

import { IRootState, rootReducer } from './root-reducer';

const composeEnhancers = (
  process.env.NODE_ENV === 'development' &&
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

export const history = createHistory();

function configureStore(initialState?: IRootState) {
  const middlewares = [
    createRouterMiddleware(history),
  ];

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );

  return createStore(
    rootReducer,
    initialState!,
    enhancer
  );
}

export const store = configureStore();
export default store;
