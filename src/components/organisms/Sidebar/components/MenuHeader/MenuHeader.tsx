import { transparentize } from 'polished';

import styled from '@theme';

export default styled.h1`
  padding-left: ${p => p.theme.dimensions.large}px;
  color: ${p => transparentize(0.8, p.theme.colors.white)};
`;
