import * as React from 'react';
import MdMenu from 'react-icons/lib/md/menu';

import { IconButton } from './components';

import styled from '@theme';

const Container = styled.header`
  width: 100%;
  background-color: ${p => p.theme.colors.white};
  border-bottom: 1px solid ${p => p.theme.colors.silver};

  & > ${IconButton as any} {
    width: ${p => p.theme.dimensions.mult(18)}px;
    height: ${p => p.theme.dimensions.mult(18)}px;
  }
`;

interface IProps {
  className?: string;
  menuOnClick: () => void;
}

const Header: React.SFC<IProps> = props => (
  <Container className={props.className}>
    <IconButton onClick={props.menuOnClick}>
      <MdMenu size={32} />
    </IconButton>
  </Container>
);

export default Header;
