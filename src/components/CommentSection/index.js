/**
* @flow
* CommentSection
*/
import React from 'react';
import { Col, Row } from 'antd';
import Comment from 'components/Comment';
import faker from 'faker';
import styled from 'styled-components';

type commentSectionProps = {
}

const CommentSectionWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

function CommentSection(props: commentSectionProps) {
  return (
    <div style={{backgroundColor: '#191919', padding: '96px 40px'}}>
      <CommentSectionWrapper>
        <Row gutter={24}>
          <Col xs={24} sm={8}>
            <Comment
              avatar={faker.image.avatar()}
              name={faker.name.findName()}
              description={faker.name.jobTitle()}
              comment={faker.lorem.paragraph().substr(0, 180)}
            />
          </Col>
          <Col xs={24} sm={8}>
            <Comment
              avatar={faker.image.avatar()}
              name={faker.name.findName()}
              description={faker.name.jobTitle()}
              comment={faker.lorem.paragraph().substr(0, 180)}
            />
          </Col>
          <Col xs={24} sm={8}>
            <Comment
              avatar={faker.image.avatar()}
              name={faker.name.findName()}
              description={faker.name.jobTitle()}
              comment={faker.lorem.paragraph().substr(0, 180)}
            />
          </Col>
        </Row>
      </CommentSectionWrapper>
    </div>
  );
}

export default CommentSection;
