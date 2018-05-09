import * as styledComponents from 'styled-components';

import { theme } from './index';

type themeType = Deep.Readonly<typeof theme>;
type MyThemedProps<P> =
  styledComponents.ThemedStyledProps<Deep.Readonly<P>,
  themeType>;

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  themeType
>;

export default styled;
export {
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  MyThemedProps
};
