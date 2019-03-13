import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUsers } from '../redux/actions/userActions';
import { UserFullName } from '../components/UserFullName';
import Language from '../components/Language';
import { translate } from '../i18n';

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getUsers());
  }

  renderUsers() {
    const { users } = this.props;
    if (!users || !users.data.length) {
      return null;
    }

    return (
      <ul>
        {users.data.map(user => (
          <li key={user.id}>
            <Link to={`/${user.id}`}>
              <UserFullName user={user} />
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="home">
        <h1>{translate('home_page')}</h1>

        <Language />

        {this.renderUsers()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.user.users,
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
