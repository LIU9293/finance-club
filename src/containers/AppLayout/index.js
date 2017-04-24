/*
 * Layout
 */
import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import AppHeader from 'components/Header';
import AppFooter from 'components/Footer';
const { Content } = Layout;

type AppLayoutProps = {
  dispatch: func
}

export class AppLayout extends React.PureComponent {

  props: AppLayoutProps

  render() {
    return (
      <Layout id='app'>
        <AppHeader />
        <Content>
          {this.props.children}
        </Content>
        <AppFooter />
      </Layout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AppLayout);
