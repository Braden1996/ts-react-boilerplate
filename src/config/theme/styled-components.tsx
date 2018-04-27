import * as styledComponents from 'styled-components';

import { ITheme } from './index.d';

type MyThemedProps<P> =
  styledComponents.ThemedStyledProps<Deep.Readonly<P>, Deep.Readonly<ITheme>>;

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ITheme
>;

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider, MyThemedProps };
