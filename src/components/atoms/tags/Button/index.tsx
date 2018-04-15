
import styled, { css, MyThemedProps } from '@theme'

interface IButton {
  disabled?: boolean;
}

export default styled.button`
  background-color: ${p => p.theme.primaryColor};
  ${(p: MyThemedProps<IButton>) => p.disabled ? css`
    pointer-events: none;
    opacity: 0.5;
  ` : ''}
`
