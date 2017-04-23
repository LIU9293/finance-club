import styled from 'styled-components';

export const CardPart = styled.div`
  width: 100%;
  height: 350px;
  padding: 36px;
  background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
  background-size: cover;
  background-position: center center;
  background-color: white;

  @media (max-width: 767px) {
    height: 250px;
  }

  @media (max-width: 500px) {
    height: 300px;
  }
`;

export const RightPart = styled.div`
  width: 100%;
  height: 700px;
  background-color: white;

  @media (max-width: 767px) {
    height: 500px;
  }
`;

export const ImageFilter = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.backgroundColor || '#000'};
  opacity: ${props => props.opacity || '0.5'};
  z-index: 2;
`;
