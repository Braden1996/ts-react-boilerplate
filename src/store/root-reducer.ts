import { routerReducer as router, RouterState } from 'react-router-redux';
import { combineReducers } from 'redux';

import counters, { State as CountersState } from './count/reducer';

// tslint:disable no-empty-interface
interface IStoreEnhancerState {}

export interface IRootState extends IStoreEnhancerState {
  router: RouterState;
  counters: CountersState;
}

import { RootAction } from './root-action';
export const rootReducer = combineReducers<IRootState, RootAction>({
  counters,
  router,
});
