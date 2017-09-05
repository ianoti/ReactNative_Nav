import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, CustomInput, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  constructor() {
    super();
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    const { email, password } = this.props;
    console.log('bbom', this.props)
    return (
      <Card>
        <CardSection>
          <CustomInput
            label="email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={email}
          />
        </CardSection>
        <CardSection>
          <CustomInput
            secureTextEntry
            label="password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={password}
          />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
    email: state.auth.email,
    password: state.auth.password
  });

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
