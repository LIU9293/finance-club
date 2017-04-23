/**
 * @flow
 */
import styled from 'styled-components';

type FullHeightSectionProps = {
  background?: string,
  backgroundImage?: string,
}

const FullHeightSection = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props: FullHeightSectionProps) => props.background || 'white'};
  background-image: ${(props: FullHeightSectionProps) => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default FullHeightSection;
