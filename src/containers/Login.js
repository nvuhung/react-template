import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import '../styles/Login.scss';

import { login } from '../redux/actions/userActions';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    const { userLogin, history } = this.props;
    if (userLogin) {
      history.push('');
    }
  }

  submit(event) {
    event.preventDefault();

    const { email, password } = this.state;

    if (!email || !password) {
      toast.error('Please enter email and password');
    } else {
      const { dispatch, history } = this.props;
      dispatch(
        login(email, password, () => {
          history.push('');
        }),
      );
    }
  }

  render() {
    const { email, password } = this.state;

    return (
      <Form className="login p-4" onSubmit={event => this.submit(event)}>
        <FormGroup>
          <Label for="login-email">Email</Label>
          <Input
            type="email"
            name="email"
            id="login-email"
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <Label for="login-password">Password</Label>
          <Input
            type="password"
            name="password"
            id="login-password"
            placeholder="Password"
            autoComplete="password"
            value={password}
            onChange={event => this.setState({ password: event.target.value })}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

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
)(Login);
