/**
 * JoinUs
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import FullHeightSection from 'components/FullHeightSection';
import RoundButton from 'components/RoundButton';
import {
  ImageFilter
} from 'components/IntroSection/style';
import { Title } from './style';
import JobItem from 'components/JobItem';
import BG5 from 'public/finance5.jpg';

export class JoinUs extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="加入我们 - 投行之家金融俱乐部" />
        <FullHeightSection
          style={{height: '500px'}}
          backgroundImage={BG5}
        >
          <ImageFilter />
          <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', zIndex: 3, flexDirection: 'column'}}>
            <p style={{fontSize: '40px', color: '#fff'}}>{'加入我们'}</p>
            <a href={'mailto: 1178852418@qq.com'}>
              <RoundButton primary>立即行动</RoundButton>
            </a>
          </div>
        </FullHeightSection>
        <div className='section-wrapper' style={{padding: '20px 30px'}}>
          <Title>
            {'社会招聘'}
          </Title>
          <JobItem
            jobTitle='经纪人'
            needs={[
              'Build a microservice for pre-building application containers when users push new versions of their code.',
              'Develop a log collection and delivery service for allowing front-ends to browse logs from running processes.',
              'Build and maintain GraphQL performance instrumentation agents in languages ',
              'Create a backend for collecting, aggregating, and serving a high resolution view'
            ]}
          />
          <JobItem
            jobTitle='营销经理'
            needs={[
              'Build a microservice for pre-building application containers when users push new versions of their code.',
              'Develop a log collection and delivery service for allowing front-ends to browse logs from running processes.',
              'Build and maintain GraphQL performance instrumentation agents in languages ',
              'Create a backend for collecting, aggregating, and serving a high resolution view'
            ]}
          />
          <Title>
            {'校园招聘'}
          </Title>
          <JobItem
            jobTitle='管理培训生'
            needs={[
              'Build a microservice for pre-building application containers when users push new versions of their code.',
              'Develop a log collection and delivery service for allowing front-ends to browse logs from running processes.',
              'Build and maintain GraphQL performance instrumentation agents in languages ',
              'Create a backend for collecting, aggregating, and serving a high resolution view'
            ]}
          />
          <JobItem
            jobTitle='实习助理'
            needs={[
              'Build a microservice for pre-building application containers when users push new versions of their code.',
              'Develop a log collection and delivery service for allowing front-ends to browse logs from running processes.',
              'Build and maintain GraphQL performance instrumentation agents in languages ',
              'Create a backend for collecting, aggregating, and serving a high resolution view'
            ]}
          />
        </div>
      </div>
    );
  }
}

JoinUs.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(JoinUs);
