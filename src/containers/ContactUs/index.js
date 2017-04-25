/**
 * ContactUs
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AppLayout from 'containers/AppLayout';
import Helmet from 'react-helmet';
import FullHeightSection from 'components/FullHeightSection';
import Founder from 'components/Founder';
import RoundButton from 'components/RoundButton';
import {
  ImageFilter
} from 'components/IntroSection/style';
import BG5 from 'public/finance5.jpg';

export class ContactUs extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppLayout match={this.props.match}>
        <Helmet title="关于我们 - 投行之家金融俱乐部" />
        <FullHeightSection
          style={{height: '500px'}}
          backgroundImage={BG5}
        >
          <ImageFilter />
          <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', zIndex: 3, flexDirection: 'column'}}>
            <p style={{fontSize: '40px', color: '#fff'}}>{'关于我们'}</p>
          </div>
        </FullHeightSection>
        <Founder />
      </AppLayout>
    );
  }
}

ContactUs.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ContactUs);
