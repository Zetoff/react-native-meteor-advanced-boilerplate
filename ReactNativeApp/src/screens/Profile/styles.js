import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../config/colors';

const avatarSize = 150;

const window = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    width: window.width,
    height: window.height * 0.4,
  },
  body: {
    marginTop: -avatarSize / 2,
    alignItems: 'center',
  },
  avatar: {
    height: avatarSize,
    width: avatarSize,
    borderRadius: avatarSize / 2,
    borderColor: colors.primary,
  },
  email: {
    marginTop: 10,
  },
  logoutButton: {
    marginTop: 10,
  },
});
