import * as styledComponents from 'styled-components';
import { ThemedStyledProps } from 'styled-components';

import { IThemeInterface } from './index.d';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

type MyThemedProps<P> = ThemedStyledProps<P, IThemeInterface>;

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider, MyThemedProps };
