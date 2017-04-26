/**
* Header
*/
import React from 'react';
import { Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import {
  HeaderRow
} from './style';
const logo = require('./logo.svg');
const SubMenu = Menu.SubMenu;

type headerProps = {
  match: any
}

class Header extends React.Component {
  props: headerProps

  state = {
    current: 'homepage',
    light: false,
  }

  componentWillMount() {
    const { path } = this.props.match;
    this.setState({
      current: path.split('/')[1] !== "" ? path.split('/')[1] : 'homepage'
    });
  }

  componentDidMount() {
    document.addEventListener('scroll', this.setLightHeader);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.setLightHeader);
  }

  setLightHeader = () => {
    let height;
    switch (this.props.match.path) {
      case "/":
        height = window.innerHeight;
        break;
      default:
        height = 600;
    }
    if(window.pageYOffset > (height - 80)) {
      if(!this.state.light){
        this.setState({light: true});
      }
    } else {
      if(this.state.light){
        this.setState({light: false});
      }
    }
  }

  handleClick = (e: any) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return(
      <HeaderRow type={this.state.light ? 'light' : 'dark'}>
        <Row style={{height: '80px'}} type='flex' align='middle' justify='space-between'>
          <Col xs={24} sm={24} md={5} lg={4}>
            <Link to='/'>
              <img src={logo} alt={'logo'} height={60} />
            </Link>
          </Col>
          <Col xs={0} sm={0} md={19} lg={20}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode={this.props.inline ? 'inline' : 'horizontal'}
              className='nav-menu'
              theme={this.state.light ? 'light' : 'dark'}
            >
              <Menu.Item key='homepage'>
                <Link to='/'>
                  {'首页'}
                </Link>
              </Menu.Item>
              <Menu.Item key='join'>
                <Link to='/join'>
                  {'加入'}
                </Link>
              </Menu.Item>
              <SubMenu title={'项目'}>
                <Menu.Item key="refer">
                  <Link to='/refer'>
                    实习内推项目
                  </Link>
                </Menu.Item>
                <Menu.Item key="hire">金融猎聘（暂未开放）</Menu.Item>
              </SubMenu>
              <Menu.Item key='about'>
                <Link to='/about'>
                  {'关于'}
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </HeaderRow>
    );
  }
}

export default Header;
