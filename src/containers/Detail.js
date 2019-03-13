import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUserDetail } from '../redux/actions/userActions';
import { UserFullName } from '../components/UserFullName';

class Detail extends Component {
  componentDidMount() {
    const { match, dispatch } = this.props;
    dispatch(getUserDetail(match.params.id));
  }

  renderUserDetail() {
    const { userDetail } = this.props;
    if (!userDetail) {
      return null;
    }

    return (
      <div>
        <p>Id: {userDetail.id}</p>
        <p>
          Name: <UserFullName user={userDetail} />
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="detail">
        <h1>Detail Page</h1>
        <Link to="/">Back to home</Link>

        {this.renderUserDetail()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userDetail: state.user.userDetail,
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
