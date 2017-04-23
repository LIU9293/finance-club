/*
 * Layout
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import AppHeader from 'components/Header';
import AppFooter from 'components/Footer';
const { Header, Footer, Content } = Layout;

export class AppLayout extends React.PureComponent {
  render() {
    return (
      <Layout id='app'>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          {this.props.children}
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    );
  }
}

Layout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AppLayout);
