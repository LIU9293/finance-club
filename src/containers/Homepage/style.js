import styled from 'styled-components';

export const ContentArea = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const FrontLabel = styled.div`
  font-size: 36px;
  color: white;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;
