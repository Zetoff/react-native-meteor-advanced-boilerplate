import React, { PropTypes } from 'react';
import Meteor from 'react-native-meteor';
import { Text } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

import ContentWrapper from '../components/ContentWrapper';

class Profile extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
  };

  logout = () => {
    Meteor.logout(() => {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
      });
      this.props.navigation.dispatch(resetAction);
    });
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
