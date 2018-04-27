import styled, { css, MyThemedProps as P } from '@theme'

interface IProps {
  glow?: boolean;
}

export default styled.h1`
  color: ${(p: P<IProps>) =>
    p.glow ? p.theme.colors.blue : p.theme.colors.red};
  ${p => p.glow && css`
    text-shadow: 0 0 10px ${p.theme.colors.pink};
  `}
`;
