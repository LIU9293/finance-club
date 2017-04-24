/**
* @flow
* ProjectSection
*/
import React from 'react';
// import styled from 'styled-components';
import FullHeightSection from 'components/FullHeightSection';
import SectionContent from 'components/SectionContent';
import RoundButton from 'components/RoundButton';
import {
  ImageFilter
} from 'components/IntroSection/style';
import {
  FrontLabel
} from 'components/MainSection/style';
import BG4 from 'public/finance4.jpg';

type projectSectionProps = {
}

function ProjectSection(props: projectSectionProps) {
  return (
    <FullHeightSection backgroundImage={BG4}>
      <ImageFilter />
      <SectionContent style={{alignItems: 'flex-end', zIndex: 3}}>
        <FrontLabel backgroundColor={'transparent'}>大学生实习内推项目</FrontLabel>
        <FrontLabel
          backgroundColor={'transparent'}
          size={18}
          sizeSmall={16}
        >
          获得顶级证券公司，金融机构的实习机会，从未如此触手可及
        </FrontLabel>
        <RoundButton primary>立即了解</RoundButton>
      </SectionContent>
    </FullHeightSection>
  );
}

export default ProjectSection;
