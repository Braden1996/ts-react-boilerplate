import { combineReducers } from 'redux';
import { getReturnOfExpression } from 'typesafe-actions';

import * as actions from './actions';

const returnsOfActions = Object.values(actions).map(getReturnOfExpression);
type Action = typeof returnsOfActions[number];

interface IState {
  value: number[];
  shit: string;
}
export type State = Deep.Readonly<IState>;

export default combineReducers<State, Action>({
  shit: (state = 'Hello', action) => {
    switch (action.type) {
      default: {
        return state;
      }
    }
  },
  value: (state = [1, 2, 3], action) => {
    switch (action.type) {
      default: {
        return state;
      }
    }
  },
});
