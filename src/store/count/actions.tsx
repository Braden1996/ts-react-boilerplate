
import { createAction } from 'typesafe-actions';

export const add = createAction('ADD', (amount: number) => ({
  type: 'ADD',
  payload: amount,
}));

export const increment = createAction('INCREMENT');
