import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-elements';


import ContentWrapper from '../components/ContentWrapper';

class SignUp extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
  };

  goToSignIn = () => {
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
      <ContentWrapper>
        <Text>Sign Up</Text>
        <Button
          title="Sign In"
          icon={{ name: 'login-variant', type: 'material-community' }}
          onPress={this.goToSignIn}
        />
      </ContentWrapper>
    );
  }
}

export default SignUp;
