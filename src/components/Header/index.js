/**
* @flow
* Header
*/
import React from 'react';
import { Menu, Row, Col } from 'antd';
import {
  HeaderRow
} from './style';
const logo = require('./logo.svg');

type headerProps = {
}

class Header extends React.PureComponent {
  props: headerProps

  state = {
    current: 'homepage',
    light: false
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if(window.pageYOffset > window.innerHeight) {
        if(!this.state.light){
          this.setState({light: true});
        }
      } else {
        if(this.state.light){
          this.setState({light: false});
        }
      }
    });
  }

  handleClick = (e: any) => {
    this.setState({
      current: e.key,
    });
  }

  render(){
    return(
      <HeaderRow type={this.state.light ? 'light' : 'dark'}>
        <Row style={{height: '80px'}} type='flex' align='middle' justify='space-between'>
          <Col xs={24} sm={24} md={5} lg={4}>
            <img src={logo} alt={'logo'} height={60} />
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
                {'首页'}
              </Menu.Item>
              <Menu.Item key='join'>
                {'加入'}
              </Menu.Item>
              <Menu.Item key='contact'>
                {'联系'}
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </HeaderRow>
    );
  }
}

export default Header;
