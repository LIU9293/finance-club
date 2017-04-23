/**
 * Homepage
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

export class Homepage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title='投行之家金融俱乐部'
          meta={[
            { name: 'description', content: '投行之家金融俱乐部' },
          ]}
        />
        <div>homepage</div>
      </div>
    );
  }
}

Homepage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Homepage);
