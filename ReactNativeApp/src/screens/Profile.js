import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-elements';

import ContentWrapper from '../components/ContentWrapper';

class Profile extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
  };

  logout = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <ContentWrapper>
        <Text>Profile</Text>
        <Button
          title="Log out"
          icon={{ name: 'logout-variant', type: 'material-community' }}
          onPress={this.logout}
        />
      </ContentWrapper>
    );
  }
}

export default Profile;
