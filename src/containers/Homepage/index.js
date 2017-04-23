/**
 * Homepage
 */
import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import FullHeightSection from 'compnents/FullHeightSection';
import {
  ContentArea,
  FrontLabel,
} from './style';
import BG1 from 'public/finance1.jpg';

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
        <FullHeightSection backgroundImage={BG1}>
          <ContentArea>
            <FrontLabel>
              投行之家金融俱乐部
            </FrontLabel>
          </ContentArea>
        </FullHeightSection>
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
