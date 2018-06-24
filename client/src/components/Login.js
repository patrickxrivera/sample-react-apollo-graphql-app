import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import { saveUserData } from '../utils';
import { SIGNUP, LOGIN } from '../graphql/mutations';

const style = {
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    width: '150px',
    margin: '10px 0'
  }
};

class Login extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    error: ''
  };

  handleInputChange = (prop) => (e) => {
    this.setState({ [prop]: e.target.value });
  };

  confirm = async () => {
    const { isLogin } = this.props.location.state;

    isLogin ? await this.handleLogin(this.state) : await this.handleSignup(this.state);

    this.props.history.push('/');
  };

  handleLogin = async ({ email, password }) => {
    const result = await this.props
      .loginMutation({
        variables: { email, password }
      })
      .catch((err) => {
        throw new Error(err);
      });

    const { token } = result.data.login;

    saveUserData(token);
  };

  handleSignup = async ({ name, email, password }) => {
    const result = await this.props.signupMutation({
      variables: { name, email, password }
    });

    const { token } = result.data.signup;

    saveUserData(token);
  };

  render() {
    const { email, password, name } = this.state;
    const { isLogin } = this.props.location.state;

    return (
      <div>
        <h4>{isLogin ? 'Login' : 'Sign Up'}</h4>
        <div style={style.form}>
          {!isLogin && (
            <input
              style={style.input}
              value={name}
              onChange={this.handleInputChange('name')}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            style={style.input}
            value={email}
            onChange={this.handleInputChange('email')}
            type="text"
            placeholder="Your email address"
          />
          <input
            style={style.input}
            value={password}
            onChange={this.handleInputChange('password')}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div>
          <button onClick={this.confirm}>{isLogin ? 'login' : 'create account'}</button>
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(SIGNUP, { name: 'signupMutation' }),
  graphql(LOGIN, { name: 'loginMutation' })
)(Login);
