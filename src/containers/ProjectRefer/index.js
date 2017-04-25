/**
 * ProjectRefer
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import AppLayout from 'containers/AppLayout';
import FullHeightSection from 'components/FullHeightSection';
import RoundButton from 'components/RoundButton';
import { Carousel, Col, Row } from 'antd';
import {
  ImageFilter,
  CardPart,
  RightPart
} from 'components/IntroSection/style';
import {
  FrontLabel
} from 'components/MainSection/style';
import {
  CompanyLogo,
  CompanyLogoContainer,
  Provide,
  ProvideItem
} from './style';
import PIC1 from 'public/finance1.jpg';
import PIC2 from 'public/finance2.jpg';
import BG6 from 'public/finance6.jpg';
import BG7 from 'public/finance7.jpg';
import C1 from 'public/company/1.png';
import C2 from 'public/company/2.png';
import C3 from 'public/company/3.png';
import C4 from 'public/company/4.png';
import C5 from 'public/company/5.png';
import C6 from 'public/company/6.png';
import C7 from 'public/company/7.png';
import C8 from 'public/company/8.png';

export class ProjectRefer extends React.PureComponent {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
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
        <h1 style={{textAlign: 'center', marginTop: '50px', fontSize: '40px'}}>合作机构</h1>
        <hr style={{width: '50px', margin: 'auto'}} />
        <Carousel {...settings} autoplay style={{height: '160px', lineHeight: '160px'}}>
          <CompanyLogoContainer>
            <CompanyLogo src={C1} alt='C1' />
          </CompanyLogoContainer>
          <CompanyLogoContainer>
            <CompanyLogo src={C2} alt='C2' />
          </CompanyLogoContainer>
          <CompanyLogoContainer>
            <CompanyLogo src={C3} alt='C3' />
          </CompanyLogoContainer>
          <CompanyLogoContainer>
            <CompanyLogo src={C4} alt='C4' />
          </CompanyLogoContainer>
          <CompanyLogoContainer>
            <CompanyLogo src={C5} alt='C5' />
          </CompanyLogoContainer>
          <CompanyLogoContainer>
            <CompanyLogo src={C6} alt='C6' />
          </CompanyLogoContainer>
          <CompanyLogoContainer>
            <CompanyLogo src={C7} alt='C7' />
          </CompanyLogoContainer>
          <CompanyLogoContainer>
            <CompanyLogo src={C8} alt='C8' />
          </CompanyLogoContainer>
        </Carousel>
        <FullHeightSection
          style={{height: '600px', marginTop: '40px'}}
          backgroundImage={BG7}
        >
          <Row style={{height: '100%'}}>
            <Col xs={24} sm={12} style={{height: '100%'}}>
              <ImageFilter />
              <div style={{zIndex: 3, margin: '40px'}}>
                <h1 style={{margin: '20px', color: '#fff'}}>你将有机会接触:</h1>
                <Provide>
                  <ProvideItem>
                    {`前十券商的投行、行研、直投、固收、量化、资管、自营、场外市场等部门实习，
                      如中金、中信、招商、广发、中信建投、申万、国泰君安、国信、华泰、银河、海通、光大等；`}
                  </ProvideItem>
                  <ProvideItem>
                    {`知名VCPE公司的投资助理、行业分析师助理等，如红杉、IDG资本、九鼎、中科招商、深创投、达晨、君联资本等；`}
                  </ProvideItem>
                  <ProvideItem>
                    {`四大会计事务所的审计、咨询、财务顾问等实习，还有立信、瑞华、天健等；`}
                  </ProvideItem>
                  <ProvideItem>
                    {`MBB、罗兰贝格、LEK、埃森哲、科尔尼、四大咨询等外资咨询公司实习；`}
                  </ProvideItem>
                  <ProvideItem>
                    {`外资银行实习，如花旗、德意志银行、汇丰、渣打等；`}
                  </ProvideItem>
                </Provide>
              </div>
            </Col>
          </Row>
        </FullHeightSection>
        <div className='section-wrapper' id="intro">
          <Row gutter={24}>
            <Col sm={24} md={7}>
              <RightPart>
                <h1>金融人士</h1>
                <hr />
                <p></p>
                <h1>在校生</h1>
                <hr />
                <p></p>
              </RightPart>
            </Col>
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
                    <h1>金融俱乐部</h1>
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
          </Row>
        </div>
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
