/**
* @flow
* Comment
*/
import React from 'react';
import {
  CommentWrapper,
  CommentWords,
  CommentPerson,
  CommentAvatar,
  CommentName
} from './style';

type commentProps = {
  comment: string,
  avatar: string,
  name: string,
  description: string,
}

function Comment(props: commentProps) {
  return (
    <CommentWrapper>
      <CommentWords>{props.comment}</CommentWords>
      <CommentPerson>
        <CommentAvatar src={props.avatar} alt={`avatar-${props.name}`} />
        <CommentName>
          <p style={{color: '#191919'}}>{props.name}</p>
          <p style={{color: '#191919'}}>{props.description}</p>
        </CommentName>
      </CommentPerson>
    </CommentWrapper>
  );
}

export default Comment;
