/**
* @flow
* IntroSection
*/
import React from 'react';
import { Col, Row } from 'antd';
import {
  CardPart,
  RightPart,
  ImageFilter
} from 'components/IntroSection/style';
import RoundButton from 'components/RoundButton';
import Zhao from 'public/zhao.jpg';
import PIC2 from 'public/finance3.jpg';

type introSectionProps = {
}

function IntroSection(props: introSectionProps) {
  return (
    <div className='section-wrapper'>
      <Row gutter={24}>
        <Col sm={24} md={17} style={{marginBottom: '20px'}}>
          <Row gutter={0} type='flex' className='row-margin-small'>
            <Col xs={24} sm={12}>
              <CardPart backgroundImage={Zhao}>
                <ImageFilter opacity={0.25} />
              </CardPart>
            </Col>
            <Col xs={24} sm={12}>
              <CardPart>
                <h1>Co-Founder: 赵宗阳</h1>
                <p>
                  {`投行之家金融俱乐部总经理、董事，合伙人。教育行业多年从业经历，
                    对金融行业从业人员职业发展有充分的了解及认知，帮助数十名大学生进入
                    券商投行部，研究所，知名基金公司投研部实习或工作。`
                  }
                </p>
              </CardPart>
            </Col>
          </Row>
          <Row gutter={0} type="flex">
            <Col xs={{span: 24, order: 2}} sm={{span: 12, order: 1}}>
              <CardPart>
                <h1>Co-Founder: 朱灿</h1>
                <p>
                  {`你有一个很酷的点子或者项目想和JavaScript社区分享么？
                    2017年的JS中国开发者大会将于7月15至16日在上海举行,
                    现已开放演讲者及赞助商的申请通道，截止时间为北京时间2016年5月20日24点。
                    欢迎所有JavaScirpt开发者及爱好者的踊跃参与！`
                  }
                </p>
              </CardPart>
            </Col>
            <Col xs={{span: 24, order: 1}} sm={{span: 12, order: 2}}>
              <CardPart backgroundImage={PIC2}>
                <ImageFilter backgroundColor="rgb(255, 225, 102)" />
              </CardPart>
            </Col>
          </Row>
        </Col>
        <Col sm={24} md={7}>
          <RightPart>
            <h1>关于</h1>
            <hr />
            <p>
            {`投行之家专注于投行业，服务投行机构、未上市公司、高净值客户、社会大众、从业人员、
              上市公司六大类客户，挖掘客户需求，整合筛选优质资源，为客户提供便捷、高性价比的一站式优质服务。
              投行之家除了对投行机构进行公正评级外，
              也为投资人与社会公众提供上市公司尽职调研报告及风险提示，规避投资风险，
              维护投资者合法权益，促进中国资本市场健康有序发展。`
            }
            </p>
            <h1 style={{marginTop: '20px'}}>联系我们</h1>
            <hr />
            <a href={'mailto: 1178852418@qq.com'}>
              <RoundButton primary>E-mail Us</RoundButton>
            </a>
          </RightPart>
        </Col>
      </Row>
    </div>
  );
}

export default IntroSection;
