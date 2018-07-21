// @ts-ignore
import styles from '@sambego/storybook-styles';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import styled from '@theme';

import Wrapper from './Wrapper';

const Logo = styled.div`
  width: 100px;
  height: 50px;
  background-color: pink;
`;
const Header = styled.div`
  width: 485px;
  background-color: royalblue;
`;
const Sidebar = styled.div`
  background-color: yellow;
`;
const Footer = styled.div`
  height: 50px;
  background-color: rebeccapurple;
`;

const componentProps = {
  logo: <Logo />,
  header: <Header />,
  sidebar: <Sidebar />,
  footer: <Footer />,
};

const Children = styled.div`
  background-color: seagreen;
`;

storiesOf('templates/GenericPage/Wrapper', module)
  .add('basic Wrapper with Sidebar', () => (
    <Wrapper {...componentProps} showSidebar>
      <Children />
    </Wrapper>
  ))
  .add('basic Wrapper without Sidebar', () => (
    <Wrapper {...componentProps}>
      <Children />
    </Wrapper>
  ));
