import styled, { css } from '@theme'

interface IProps {
  glow?: boolean;
}

export default styled.h1`
  ${(p: IProps) => ''}
  color: ${p => p.glow ? p.theme.colors.blue : p.theme.colors.red};
  ${p => p.glow ? css`
    text-shadow: 0 0 10px ${p.theme.colors.pink};
  ` : ''}
`;
