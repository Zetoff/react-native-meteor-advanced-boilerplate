import Meteor, { createContainer } from 'react-native-meteor';
import Profile from './Profile';

const ProfileContainer = createContainer(() => {
  return {
    user: Meteor.user(),
    handleLogout: (callback) => Meteor.logout(callback),
  };
}, Profile);

export default ProfileContainer;
