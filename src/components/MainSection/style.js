import styled from 'styled-components';

export const FrontLabel = styled.div`
  font-size: ${props => props.size || 52}px;
  color: white;

  @media (max-width: 767px) {
    font-size: ${props => props.sizeSmall || 44}px;
  }
`;
