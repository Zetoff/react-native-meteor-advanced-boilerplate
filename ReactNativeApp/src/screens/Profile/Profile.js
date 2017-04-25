import _ from 'lodash';
import React, { PropTypes } from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

import ContentWrapper from '../../components/ContentWrapper';
import images from '../../config/images';
import styles from './styles';

// Replace by React-Native-Elements when
// https://github.com/react-native-training/react-native-elements/issues/327 is fixed
import Avatar from '../../components/Avatar';

class Profile extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
    handleLogout: PropTypes.func,
    user: PropTypes.object,
  };

  static navigationOptions = {
    headerVisible: true,
    title: 'Profile',
  };

  logout = () => {
    const callback = () => {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
      });
      this.props.navigation.dispatch(resetAction);
    };
    this.props.handleLogout(callback);
  };

  render() {
    const { user } = this.props;
    let email;

    if (user) {
      email = user.emails[0].address;
    }
    return (
      <ContentWrapper>
        <View style={styles.container}>
          <Image style={styles.header} source={images.profileHeader} />
          <View style={styles.body}>
            <Avatar email={email} style={styles.avatar} />
            <Text style={styles.email}>{_.capitalize(email)}</Text>
            <Button
              title="Log out"
              icon={{ name: 'logout-variant', type: 'material-community' }}
              onPress={this.logout}
              style={styles.logoutButton}
            />
          </View>
        </View>
      </ContentWrapper>
    );
  }
}

export default Profile;
