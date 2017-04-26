/**
 * JoinUs
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
import { Col, Row } from 'antd';
import { Title } from './style';
import JobItem from 'components/JobItem';
import BG5 from 'public/finance5.jpg';

export class JoinUs extends React.PureComponent {
  render() {
    return (
      <AppLayout match={this.props.match}>
        <Helmet title="加入我们 - 投行之家金融俱乐部" />
        <FullHeightSection
          style={{height: '500px'}}
          backgroundImage={BG5}
        >
          <ImageFilter />
          <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', zIndex: 3, flexDirection: 'column'}}>
            <p style={{fontSize: '40px', color: '#fff'}}>{'加入我们'}</p>
            <a href={'mailto: touhangzhijiaclub@163.com'}>
              <RoundButton primary>立即行动</RoundButton>
            </a>
          </div>
        </FullHeightSection>
        <div className='section-wrapper' style={{padding: '20px 30px'}}>
          <Row gutter={30}>
            <Col xs={24} md={12}>
              <Title>
                {'社会招聘'}
              </Title>
              <JobItem
                jobTitle='市场销售岗'
                needs={[
                  '全日制大学本科学历及以上，要求毕业时间必须在2010年6月份之后.',
                  '有从事教育培训、职业规划类相关工作经验者优先，有金融行业从业经验者优先.',
                  '具备良好的沟通能力与应急能力，有完整的活动策划与执行经验者优先.',
                  '有责任心、学习能力强,具备良好的团队合作精神.'
                ]}
                jobs={[
                  '协助完成品牌项目的策划、提案、执行.',
                  '协助维护客户关系及开发客户关系.',
                  '及时掌握客户需求，并与客户进行沟通、谈判、联络等工作',
                  '协助销售合同的签定、及时收回款项',
                  '配合完成直属领导指派的其他工作任务'
                ]}
                benefits={[
                  '与管理团队一起对接企业，提高沟通及商业谈判技巧.',
                  '优先推荐参与相关背景提升项目.',
                  '扩大人脉资源，为之后职业发展打下基础',
                  '固定薪资3500-5000，加高额提成、节日福利，税前年收入10-15万（第一年）'
                ]}
              />
            </Col>
            <Col xs={24} md={12}>
              <Title>
                {'校园招聘'}
              </Title>
              <JobItem
                jobTitle='管理培训生—MKT方向'
                needs={[
                  '全日制大学本科学历及以上，2017年应届毕业生.',
                  '优先考虑社团工作经验，活动策划与执行经验丰富者，在校有创业经历或丰富社会实践经历者.',
                  '具备良好的沟通能力与应急能力，能够快速学习并调整工作节奏.',
                  '有责任心、学习能力强,具备良好的团队合作精神.'
                ]}
                jobs={[
                  '协助完成品牌项目的策划、提案、执行.',
                  '协助维护客户关系及开发客户关系.',
                  '及时掌握客户需求，并与客户进行沟通、谈判、联络等工作',
                  '协助销售合同的签定、及时收回款项',
                  '配合完成直属领导指派的其他工作任务'
                ]}
                benefits={[
                  '与管理团队一起对接企业，提高沟通及商业谈判技巧.',
                  '优先推荐参与相关背景提升项目.',
                  '扩大人脉资源，为之后职业发展打下基础',
                  '固定薪资3500-5000，加高额提成、节日福利，税前年收入8-10万（第一年）'
                ]}
              />
              <JobItem
                jobTitle='管理实习生'
                needs={[
                  '人际关系丰富，沟通能力强.',
                  '时间充裕，能长期稳定参与.',
                  '优先考虑社团工作经验，活动策划与执行经验丰富者',
                  '执行力强，能按时高效完成Leader的任务'
                ]}
                jobs={[
                  '与管理团队一起对接企业，提高沟通及商业谈判技巧',
                  '优先推荐参与相关背景提升项目',
                  '扩大人脉资源，为之后职业发展打下基础'
                ]}
                benefits={[
                  '与管理团队一起对接企业，提高沟通及商业谈判技巧.',
                  '优先推荐参与相关背景提升项目.',
                  '扩大人脉资源，为之后职业发展打下基础'
                ]}
              />
            </Col>
          </Row>
        </div>
      </AppLayout>
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
