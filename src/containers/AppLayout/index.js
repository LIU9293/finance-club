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

export class AppLayout extends React.Component {

  props: AppLayoutProps

  render() {
    return (
      <Layout id='app'>
        <AppHeader match={this.props.match} />
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
