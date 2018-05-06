import styled, { css, MyThemedProps as P } from '@theme'

interface IProps {
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Button = styled.button`
  height: ${(p: P<IProps>) => {
    switch (p.size) {
      case 'small':
        return 24;
      case 'large':
        return 48;
      default:
        return 32;
    }
  }}px;
  background-color: ${p => p.theme.colors.paper};

  ${p => p.disabled && css`
    pointer-events: none;
    background-color: ${p2 => p2.theme.colors.offWhite};
  `}
`;

Button.defaultProps = {
  disabled: false,
  size: 'small',
};;

export default Button;
