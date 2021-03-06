import styled from 'styled-components';

export const HeaderRow = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${props => props.type === 'light' ? 'white' : 'rgba(0, 0, 0, 0.75)'};
  transition: border .5s cubic-bezier(0.455, 0.03, 0.515, 0.955), background .5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  height: 80px;
  z-index: 999;
  padding: 0 48px;
`;
