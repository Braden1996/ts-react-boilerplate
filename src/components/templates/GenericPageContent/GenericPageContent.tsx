import * as React from 'react';

import styled from '@theme';

const Wrapper = styled.div`
  display: flex;
  overflow-y: hidden;

  background-color: ${p => p.theme.colors.paper};
`;

const Container = styled.main`
  flex: 1;
  overflow-y: scroll;

  margin: ${p => p.theme.dimensions.huge}px;
  border: ${p => p.theme.dimensions.medium}px solid ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.dimensions.borderRadius}px;

  background-color: ${p => p.theme.colors.white};
`;

interface IProps {
  children: JSX.Element;
}

const GenericTemplate: React.SFC<IProps> = props => (
  <Wrapper>
    <Container>{props.children}</Container>
  </Wrapper>
);

export default GenericTemplate;
