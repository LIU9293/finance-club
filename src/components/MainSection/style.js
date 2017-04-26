import styled from 'styled-components';

export const FrontLabel = styled.div`
  font-size: ${props => props.size || 52}px;
  color: white;
  letter-spacing: .1em;

  @media (max-width: 767px) {
    font-size: ${props => props.sizeSmall || 44}px;
    padding: 0 20px;
  }
`;
