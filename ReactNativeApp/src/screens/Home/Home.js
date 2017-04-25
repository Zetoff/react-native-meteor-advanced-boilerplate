import React from 'react';
import { Text, Image } from 'react-native';

import ContentWrapper from '../../components/ContentWrapper';
import images from '../../config/images';
import styles from './styles';

class Home extends React.PureComponent {
  static navigationOptions = {
    title: 'Home Screen Title',
  };

  render() {
    return (
        <Image style={styles.backgroundImage} source={images.home}>
          <Text style={styles.title}>Start Building Amazing Apps!!</Text>
        </Image>
    );
  }
}

export default Home;
