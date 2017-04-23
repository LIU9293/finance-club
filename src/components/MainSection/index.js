/**
* @flow
* MainSection
*/
import React from 'react';
import FullHeightSection from 'components/FullHeightSection';
import SectionContent from 'components/SectionContent';
import {
  FrontLabel
} from './style';
import BG1 from 'public/finance1.jpg';

type mainSectionProps = {
}

function MainSection(props: mainSectionProps) {
  return (
    <FullHeightSection backgroundImage={BG1}>
      <SectionContent>
        <FrontLabel>投行之家金融俱乐部</FrontLabel>
        <FrontLabel
          size={36}
          sizeSmall={30}
        >
          财富之路从未如此畅通
        </FrontLabel>
      </SectionContent>
    </FullHeightSection>
  );
}

export default MainSection;
