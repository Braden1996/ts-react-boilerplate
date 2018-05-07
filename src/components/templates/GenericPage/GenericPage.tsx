import * as React from 'react';

import { Footer, Header, Logo, Sidebar } from '@organisms';
import styled from '@theme';

const StyledSidebar = styled(Sidebar)``;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content 1fr max-content;
  grid-template-areas:
    "logo header"
    "sidebar content"
    "footer content";
  min-height: 100vh;
  max-height: 100vh;

  > * { grid-area: content; }
  > ${Logo} { grid-area: logo; }
  > ${Header} { grid-area: header; }
  > ${StyledSidebar} { grid-area: sidebar;}
  > ${Footer} { grid-area: footer; }
`;

interface IProps {
  children: JSX.Element;
}

const GenericPage: React.SFC<IProps> = props => (
  <Wrapper>
    <Logo />
    <Header />
    <StyledSidebar />
    {props.children}
    {true && <Footer />}
  </Wrapper>
);

export default GenericPage;
