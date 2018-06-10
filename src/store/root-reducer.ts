import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import counters from './count/reducer';
import history from './history';

const rootReducer = connectRouter(history)(
  combineReducers({
    counters,
  }),
);

export default rootReducer;

export type RootState = StateType<typeof rootReducer>;
