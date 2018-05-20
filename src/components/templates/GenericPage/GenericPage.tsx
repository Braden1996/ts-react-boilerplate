import * as React from 'react';

import { Footer, Header, Logo, Sidebar } from '@organisms';
import styled from '@theme';

import { Wrapper } from './components';

const StyledHeader = styled(Header)``;
const StyledSidebar = styled(Sidebar)``;

interface IProps {
  children: JSX.Element;
}

interface IState {
  showSidebar: boolean;
}

class GenericPage extends React.PureComponent<IProps, IState> {
  public state = {
    showSidebar: true,
  };

  public render() {
    return (
      <Wrapper
        showSidebar={this.state.showSidebar}
        logo={<Logo />}
        header={<StyledHeader menuOnClick={this.toggleSidebar} />}
        sidebar={<StyledSidebar />}
        footer={<Footer />}
      >
        {this.props.children}
      </Wrapper>
    );
  }

  private toggleSidebar = () =>
    this.setState({ showSidebar: !this.state.showSidebar })
}

export default GenericPage;
