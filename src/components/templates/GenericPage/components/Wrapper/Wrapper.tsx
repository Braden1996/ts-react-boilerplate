import { css } from 'emotion';
import * as React from 'react';

import styled from '@theme';

interface IGridProps {
  showSidebar?: boolean;
}

enum PARTS {
  LOGO = 1,
  HEADER,
  SIDEBAR,
  FOOTER,
}

const partsLength = Object.keys(PARTS).length / 2;

const WrapperGrid = styled.div<IGridProps>`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content 1fr max-content;
  grid-template-areas:
    'logo header'
    'sidebar content'
    'footer content';
  min-height: 100vh;
  max-height: 100vh;

  > *:nth-child(n + ${partsLength + 1}) {
    grid-area: content;
  }
  > *:nth-child(${PARTS.LOGO}) {
    grid-area: logo;
    width: 220px;
  }
  > *:nth-child(${PARTS.HEADER}) {
    grid-area: header;
  }
  > *:nth-child(${PARTS.SIDEBAR}) {
    grid-area: sidebar;
  }
  > *:nth-child(${PARTS.FOOTER}) {
    grid-area: footer;
  }

  ${p =>
    !p.showSidebar &&
    css`
      grid-template-areas:
        'logo header'
        'content content'
        'content content';
      > *:nth-child(${PARTS.SIDEBAR}),
      > *:nth-child(${PARTS.FOOTER}) {
        display: none;
      }
    `};
`;

WrapperGrid.defaultProps = {
  showSidebar: false,
};

interface IProps {
  showSidebar?: boolean;
  logo: JSX.Element;
  header: JSX.Element;
  sidebar: JSX.Element;
  footer: JSX.Element;
  children: JSX.Element;
}

const Wrapper: React.SFC<IProps> = props => {
  const sortedParts = [];
  sortedParts[PARTS.LOGO - 1] = props.logo;
  sortedParts[PARTS.HEADER - 1] = props.header;
  sortedParts[PARTS.SIDEBAR - 1] = props.sidebar;
  sortedParts[PARTS.FOOTER - 1] = props.footer;
  return (
    <WrapperGrid showSidebar={props.showSidebar}>
      {sortedParts[0]}
      {sortedParts[1]}
      {sortedParts[2]}
      {sortedParts[3]}
      {props.children}
    </WrapperGrid>
  );
};

export default Wrapper;
