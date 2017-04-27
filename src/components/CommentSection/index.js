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
    <div style={{backgroundColor: '#eee', padding: '96px 40px'}}>
      <CommentSectionWrapper>
        <Row gutter={40} style={{margin: '20px 0'}}>
          <Col xs={24} sm={8}>
            <Comment
              avatar={faker.image.avatar()}
              name={'Stacey'}
              description={'东北财经大学'}
              comment={`在某大型券商的研究所实习了三个月，
              最终成功入职上海一家中型券商固定收益部，感谢Allan的推荐，
              最终结果完全超出了我的预期.`}
            />
          </Col>
          <Col xs={24} sm={8}>
            <Comment
              avatar={faker.image.avatar()}
              name={'张同学'}
              description={'南京大学'}
              comment={`读研究生之前经过投行之家的推荐来到某券商研究院实习，
                对金融有了更具体的认知，也找到了研究生想主要学习的方向，
                感谢投行之家的推荐.`}
            />
          </Col>
          <Col xs={24} sm={8}>
            <Comment
              avatar={faker.image.avatar()}
              name={'王同学'}
              description={'墨尔本大学'}
              comment={`经投行之家的推挤，进入某券商投行部实习，
              第一次经手IPO的项目，让我对这个行业有了更深入得认识，
              感谢leader细心的知道，最终入职本地一家基金公司.`}
            />
          </Col>
        </Row>
      </CommentSectionWrapper>
    </div>
  );
}

export default CommentSection;
