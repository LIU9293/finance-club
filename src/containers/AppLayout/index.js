/*
 * Layout
 */
import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import AppHeader from 'components/Header';
import AppFooter from 'components/Footer';
import HomePage from 'containers/AppHomepage';
import JoinUs from 'containers/JoinUs';
import ContactUs from 'containers/ContactUs';
import ProjectRefer from 'containers/ProjectRefer';
const { Content } = Layout;

type AppLayoutProps = {
  dispatch: func
}

export class AppLayout extends React.Component {

  props: AppLayoutProps

  render() {
    let child;
    switch (this.props.location.pathname) {
      case '/join':
        child = <JoinUs />
        break;
      case '/about':
        child = <ContactUs />
        break;
      case '/refer':
        child = <ProjectRefer />
        break;
      default:
        child = <HomePage />
    }
    return (
      <Layout id='app'>
        <AppHeader />
        <Content>
          {child}
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
