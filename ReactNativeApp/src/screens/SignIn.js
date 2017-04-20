import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-elements';

import ContentWrapper from '../components/ContentWrapper';

class SignIn extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
  };

  goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <ContentWrapper>
        <Text>Sign In</Text>
        <Button
          title="Sign Up"
          icon={{ name: 'login-variant', type: 'material-community' }}
          onPress={this.goToSignUp}
        />
      </ContentWrapper>
    );
  }
}

export default SignIn;
