import * as styledComponents from 'styled-components';

import { ITheme } from './index.d';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ITheme
>;

type MyThemedProps<P> =
  styledComponents.ThemedStyledProps<P, Deep.Readonly<ITheme>>;

export type StyledFunction<T> =
  styledComponents.ThemedStyledFunction<T, ITheme>;

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider, MyThemedProps };
