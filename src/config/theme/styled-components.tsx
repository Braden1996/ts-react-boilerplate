import * as styledComponents from 'styled-components';
import { ThemedStyledProps } from 'styled-components';

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

type MyThemedProps<P> = ThemedStyledProps<P, ITheme>;

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider, MyThemedProps };
