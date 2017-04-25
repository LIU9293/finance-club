/**
 * Homepage
 */
import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MainSection from 'components/MainSection';
import IntroSection from 'components/IntroSection';
import CommentSection from 'components/CommentSection';
import ProjectSection from 'components/ProjectSection';
import AppLayout from 'containers/AppLayout';

type HomepageProps = {
  dispatch: func
}

export class Homepage extends React.PureComponent {

  props: HomepageProps

  render() {
    return (
      <AppLayout match={this.props.match}>
        <Helmet
          title='投行之家金融俱乐部'
          meta={[
            { name: 'description', content: '投行之家金融俱乐部' },
          ]}
        />
        <MainSection />
        <IntroSection />
        <ProjectSection />
        <CommentSection />
      </AppLayout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Homepage);
