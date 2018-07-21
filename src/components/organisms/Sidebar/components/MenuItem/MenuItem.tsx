import { transparentize } from 'polished';
import { NavLink, NavLinkProps } from 'react-router-dom';
import withProps from 'recompose/withProps';

import styled from '@theme';

export default withProps({
  activeClassName: 'active',
} as NavLinkProps)(styled(NavLink)<NavLinkProps>`
  height: ${p => p.theme.dimensions.mult(13)}px;
  padding-left: ${p => p.theme.dimensions.large}px;

  color: ${p => transparentize(0.4, p.theme.colors.white)};
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${p => transparentize(0.8, p.theme.colors.black)};
    color: ${p => p.theme.colors.white};
  }

  &.${p => p.activeClassName} {
    color: ${p => p.theme.colors.wetAsphalt};
    background-color: ${p => p.theme.colors.paper};

    padding-left: ${p => p.theme.dimensions.large - 2}px;
    border-left: 2px solid ${p => p.theme.colors.amber};
  }

  &,
  & > a {
    display: flex;
    align-items: center;

    > svg:first-child {
      margin-right: ${p => p.theme.dimensions.medium}px;
    }
  }
`) as typeof NavLink;
