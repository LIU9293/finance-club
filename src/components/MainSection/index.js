/**
* @flow
* MainSection
*/
import React from 'react';
import FullHeightSection from 'components/FullHeightSection';
import SectionContent from 'components/SectionContent';
import RoundButton from 'components/RoundButton';
import {
  FrontLabel
} from './style';
import {
  ImageFilter
} from 'components/IntroSection/style';
import BG1 from 'public/finance1.jpg';

type mainSectionProps = {
}

function MainSection(props: mainSectionProps) {
  return (
    <FullHeightSection backgroundImage={BG1}>
      <ImageFilter />
      <SectionContent style={{zIndex: 3}}>
        <FrontLabel>投行之家金融俱乐部</FrontLabel>
        <FrontLabel
          size={36}
          sizeSmall={30}
        >
          金融之路竟如此畅通
        </FrontLabel>
        <RoundButton primary onClick={() => {
          document.body.scrollTop = window.innerHeight - 80;
        }}>
          了解更多
        </RoundButton>
      </SectionContent>
    </FullHeightSection>
  );
}

export default MainSection;
