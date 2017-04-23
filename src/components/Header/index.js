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
    current: 'homepage'
  }

  handleClick = (e: any) => {
    this.setState({
      current: e.key,
    });
  }

  render(){
    return(
      <HeaderRow>
        <Row>
          <Col xs={24} sm={24} md={5} lg={4}>
            <img src={logo} alt={'logo'} />
          </Col>
          <Col xs={0} sm={0} md={19} lg={20} style={{textAlign: 'right'}}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode={this.props.inline ? 'inline' : 'horizontal'}
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
