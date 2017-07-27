import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default {
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  title: {
    color: colors.alternateText,
    fontSize: 20,
    fontFamily: 'Chela One',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    marginBottom: 30,
  },
};
