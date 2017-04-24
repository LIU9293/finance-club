/**
* @flow
* Footer
*/
import React from 'react';
import {
  FooterWrapper,
  FooterInner,
  FooterText
} from './style';

type footerProps = {
}

function Footer(props: footerProps) {
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterText>{'投行之家金融俱乐部'}</FooterText>
        <FooterText>{'联系电话: 17625907524'}</FooterText>
        <FooterText>{'联系邮箱: 1178852418@qq.com'}</FooterText>
        <FooterText>{'地址: 江苏省南京市鼓楼区中山路179号A座10楼'}</FooterText>
      </FooterInner>
    </FooterWrapper>
  );
}

export default Footer;
