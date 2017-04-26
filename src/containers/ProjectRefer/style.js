import styled from 'styled-components';

export const CompanyLogoContainer = styled.div`
  height: 260px important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const CompanyLogo = styled.img`
  width: 90%;
  max-width: 200px;
  margin: 0 auto;
`;

export const Provide = styled.ul`
  margin: 10px 0;
  padding: 0 0 0 20px;
`;

export const ProvideItem = styled.li`
  margin: 10px 0;
  display: list-item;
  list-style-type: disc;
  font-size: 20px;
  color: #eee;
`;
