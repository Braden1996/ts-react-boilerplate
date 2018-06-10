import { routerActions } from 'connected-react-router';
import { $Values } from 'utility-types';

import { Action as CountAction } from './count/reducer';

export type RootAction =
  | CountAction
  | $Values<typeof routerActions>;
