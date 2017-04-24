/**
 * JoinUs
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

export class JoinUs extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet
          title="加入我们 - 投行之家金融俱乐部"
        />
      </div>
    );
  }
}

JoinUs.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(JoinUs);
