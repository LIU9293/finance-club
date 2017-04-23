/**
 * @flow
 */
import styled from 'styled-components';

const SectionContent = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems || 'flex-start'};
`;

export default SectionContent;
