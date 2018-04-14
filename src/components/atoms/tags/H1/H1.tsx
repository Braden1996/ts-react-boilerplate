import styled, { css, MyThemedProps } from '@theme'

interface IH1 {
  glow?: boolean;
}

export default styled.h1`
  color: ${p => p.theme.colors.midnightBlue};
  ${(p: MyThemedProps<IH1>) => p.glow ? css`
    text-shadow: 0 0 10px ${p.theme.colors.alizarin};
  ` : ''}
`
