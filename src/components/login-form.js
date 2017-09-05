import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, CustomInput, Button } from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  constructor() {
    super();
    this.onEmailChange = this.onEmailChange.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <CustomInput
            label="email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
          />
        </CardSection>
        <CardSection>
          <CustomInput
            secureTextEntry
            label="password"
            placeholder="password"
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

export default connect(null, { emailChanged })(LoginForm);
