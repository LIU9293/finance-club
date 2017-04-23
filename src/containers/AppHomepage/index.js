/**
 * Homepage
 */
import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import MainSection from 'components/MainSection';

type HomepageProps = {
  dispatch: func
}

export class Homepage extends React.PureComponent {

  props: HomepageProps

  render() {
    return (
      <div>
        <Helmet
          title='投行之家金融俱乐部'
          meta={[
            { name: 'description', content: '投行之家金融俱乐部' },
          ]}
        />
        <MainSection />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Homepage);