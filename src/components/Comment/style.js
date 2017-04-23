import styled from 'styled-components';

export const CommentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const CommentWords = styled.div`
  color: #fff029;
  font-size: 24px;
  line-height: 1.4;
`;

export const CommentPerson = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const CommentAvatar = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  margin-right: 10px;
`;

export const CommentName = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;
