import React, { PropTypes } from 'react';
import { Accounts } from 'react-native-meteor';
import { Card } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

import { connectAlert } from '../components/Alert';
import ContentWrapper from '../components/ContentWrapper';
import { Input, PrimaryButton, SecondaryButton } from '../components/Form';

// TODO move to helpers package
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

class SignUp extends React.PureComponent {

  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  static navigationOptions = {
    headerVisible: true,
    title: 'Sign Up',
  };

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      signingUp: false,
    };
  }

  goToSignIn = () => {
    this.props.navigation.navigate('SignIn', { fromSignUp: true });
  };

  handleChangeEmail = email => {
    const { username } = this.state;
    const update = { email };
    const inferredUsername = email.split('@')[0];
    if (username === inferredUsername.slice(0, inferredUsername.length - 1)) {
      update.username = inferredUsername;
    }
    this.setState(update);
  };

  signUp = () => {
    const { email, username, password, confirmPassword } = this.state;

    if (email.length === 0 || !validateEmail(email)) {
      console.log(email, !validateEmail(email));
      return this.props.alertWithType('error', 'Error', 'Not valid email');
    }
    if (username.length === 0) {
      return this.props.alertWithType('error', 'Error', 'You need to provide a username');
    }
    if (password.length === 0 || password !== confirmPassword) {
      return this.props.alertWithType('error', 'Error', 'Passwords do not match');
    }
    this.setState({ signingUP: true });
    return Accounts.createUser({ username, email, password }, error => {
      this.setState({ signingUP: false });
      if (error) {
        this.props.alertWithType('error', 'Server Error', error.reason);
      } else {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Profile' })],
        });

        this.props.navigation.dispatch(resetAction);
      }
    });
  };

  render() {
    return (
      <ContentWrapper scroll>
        <Card>
          <Input
            label="Email"
            placeholder="Please enter your email ..."
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={email => this.handleChangeEmail(email)}
          />
          <Input
            label="Username"
            placeholder="Please enter your username ..."
            keyboardType="default"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
          <Input
            label="Password"
            placeholder="Please enter your Password ..."
            keyboardType="default"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <Input
            label="Confirm Password"
            placeholder="Please confirm your Password ..."
            keyboardType="default"
            secureTextEntry
            value={this.state.confirmPassword}
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
          />
          <PrimaryButton title="Sign Up" loading={this.state.signingUp} onPress={this.signUp} />
        </Card>
        <SecondaryButton title="Sign In" onPress={this.goToSignIn} />
      </ContentWrapper>
    );
  }
}

export default connectAlert(SignUp);
