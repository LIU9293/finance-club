/**
 * ProjectRefer
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import AppLayout from 'containers/AppLayout';
import FullHeightSection from 'components/FullHeightSection';
import RoundButton from 'components/RoundButton';
import {
  ImageFilter
} from 'components/IntroSection/style';
import {
  FrontLabel
} from 'components/MainSection/style';
import BG6 from 'public/finance6.jpg';

export class ProjectRefer extends React.PureComponent {
  render() {
    return (
      <AppLayout match={this.props.match}>
        <Helmet title="加入我们 - 投行之家金融俱乐部" />
        <FullHeightSection
          style={{height: '500px'}}
          backgroundImage={BG6}
        >
          <ImageFilter />
          <div style={{zIndex: 3, margin: 'auto'}}>
            <FrontLabel style={{backgroundColor: 'transparent'}}>大学生实习内推计划</FrontLabel>
          </div>
        </FullHeightSection>
      </AppLayout>
    );
  }
}

ProjectRefer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ProjectRefer);
