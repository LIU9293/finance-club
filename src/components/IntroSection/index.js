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
} from './style';
import PIC1 from 'public/finance2.jpg';
import PIC2 from 'public/finance3.jpg';

type introSectionProps = {
}

function IntroSection(props: introSectionProps) {
  return (
    <div className='section-wrapper' id="intro">
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
                <h1>投行之家</h1>
                <p>
                  {`投行之家是由一群拥有多年投融资经验的金融界投行精英，整合投行知识、
                    投行权威评级、企业一站式上市及投融资功能打造而成，旨在为中小微企业和投资人士提供一个互动交流的公共平台。
                    投行之家兼顾了企业和投行机构的共同需求，作为第三方权威的评级机构平台，为企业提供公正的投行评级。`
                  }
                </p>
              </CardPart>
            </Col>
          </Row>
          <Row gutter={0} type="flex">
            <Col xs={{span: 24, order: 2}} sm={{span: 12, order: 1}}>
              <CardPart>
                <h1>金融俱乐部</h1>
                <p>
                  {`投行之家金融俱乐部成立于南京，是国内首家针对金融行业从业人员职业发展提供一站式服务的信息交流平台平台，
                    致力于为银行，保险，证券，基金，会所，律所等金融职场精英提供最全面，
                    高效，精准，快速的信息服务，打造属于金融行业职场精英自己的“职场朋友圈”`
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
            <h1>服务对象</h1>
            <p>
              银行，保险，证券，基金，会计师，律师等金融职场从业人员，
              以及未来将要从事金融行业的储备人才。
            </p>
            <h1 style={{marginTop: '15px'}}>人脉延伸</h1>
            <p>
              俱乐部利用最全面的金融职场通讯录，庞大的会员基础，
              可以快速精准帮助会员匹配到想要寻找的人，拓展自己的职场人脉，助力职业发展。
            </p>
            <h1 style={{marginTop: '15px'}}>金融猎聘</h1>
            <p>
              俱乐部汇集了全行业最优秀的人脉，为金融及其相关机构招贤纳士提供最直接的通道，
              精准定位职位最优人选。会员也可以在这里跟老板直接互动，为自己的发展创造更多的可能。
            </p>
          </RightPart>
        </Col>
      </Row>
    </div>
  );
}

export default IntroSection;
