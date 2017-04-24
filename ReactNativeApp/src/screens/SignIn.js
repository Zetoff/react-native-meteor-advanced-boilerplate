import React, { PropTypes } from 'react';
import { Meteor } from 'react-native-meteor';
import { Card } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

import { connectAlert } from '../components/Alert';
import ContentWrapper from '../components/ContentWrapper';
import { Input, PrimaryButton, SecondaryButton } from '../components/Form';

class SignIn extends React.PureComponent {

  static propTypes = {
    navigation: PropTypes.object,
    fromSignUp: PropTypes.bool,
    alertWithType: PropTypes.func,
  };

  static navigationOptions = {
    headerVisible: true,
    title: 'Sign In',
  };

  constructor(props) {
    super(props);

    this.state = {
      emailOrUsername: '',
      password: '',
      signingIn: false,
    };
  }

  goToSignUp = () => {
    if (this.props.navigation.state.params.fromSignUp) {
      this.props.navigation.goBack();
    } else {
      this.props.navigation.navigate('SignUp');
    }
  };

  signIn = () => {
    const { emailOrUsername, password } = this.state;

    if (emailOrUsername.length === 0) {
      return this.props.alertWithType(
        'error',
        'Error',
        'You need to provide a username or email to sign in',
      );
    }
    if (password.length === 0) {
      return this.props.alertWithType(
        'error',
        'Error',
        'Your password should not be empty',
      );
    }
    this.setState({ signingIn: true });
    return Meteor.loginWithPassword(emailOrUsername, password, error => {
      this.setState({ signingIn: false });
      if (error) {
        return this.props.alertWithType(
          'error',
          'Sign In',
          error.reason,
        );
      } else {
        this.props.navigator.immediatelyResetStack([Router.getRoute('profile')]);
      }
    });
  };

  render() {
    return (
      <ContentWrapper scroll>
        <Card>
          <Input
            label="Email or username"
            placeholder="Please enter your email or username ..."
            keyboardType="email-address"
            value={this.state.emailOrUsername}
            onChangeText={emailOrUsername => this.setState({ emailOrUsername })}
          />
          <Input
            label="Password"
            placeholder="Please enter your password ..."
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <PrimaryButton title="Sign In" onPress={this.signIn} loading={this.state.signingIn} />
        </Card>
        <SecondaryButton title="Sign Up" onPress={this.goToSignUp} />
      </ContentWrapper>
    );
  }
}

export default connectAlert(SignIn);
