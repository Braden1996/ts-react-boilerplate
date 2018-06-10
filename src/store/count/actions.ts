import { createAction, createStandardAction } from 'typesafe-actions';

export const add = createStandardAction('ADD')<number>();

export const increment = createAction('INCREMENT');
