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
import PIC1 from 'public/finance2.jpg';
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
              <CardPart backgroundImage={PIC1}>
                <ImageFilter />
              </CardPart>
            </Col>
            <Col xs={24} sm={12}>
              <CardPart>
                <h1>Co-Founder: 赵宗阳</h1>
                <p>
                  {`你有一个很酷的点子或者项目想和JavaScript社区分享么？
                    2017年的JS中国开发者大会将于7月15至16日在上海举行,
                    现已开放演讲者及赞助商的申请通道，截止时间为北京时间2016年5月20日24点。
                    欢迎所有JavaScirpt开发者及爱好者的踊跃参与！`
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
            {`你有一个很酷的点子或者项目想和JavaScript社区分享么？
              2017年的JS中国开发者大会将于7月15至16日在上海举行,
              现已开放演讲者及赞助商的申请通道，截止时间为北京时间2016年5月20日24点。
              欢迎所有JavaScirpt开发者及爱好者的踊跃参与！`
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
