import * as React from 'react';

import { Footer, Header } from '@organisms';
import styled from '@theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > main {
    flex: 1
  }
`;

interface IProps {
  children: JSX.Element;
}

export const GenericTemplate = (props: Deep.Readonly<IProps>) => (
  <Wrapper>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </Wrapper>
);

export default GenericTemplate;
