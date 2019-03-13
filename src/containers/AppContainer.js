import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logout } from '../redux/actions/userActions';
import { Header } from '../components/Header';

const AppContainer = ({ dispatch, history, children, userLogin }) => {
  if (!userLogin) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <Header
        email={userLogin.email}
        logout={() => {
          dispatch(logout());
          history.push('/login');
        }}
      />

      {children}
    </div>
  );
};

const mapStateToProps = state => ({
  userLogin: state.user.userLogin,
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);
