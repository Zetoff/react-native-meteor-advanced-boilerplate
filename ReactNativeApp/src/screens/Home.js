import React from 'react';
import { Text } from 'react-native';

import ContentWrapper from '../components/ContentWrapper';

class Home extends React.PureComponent {

  static navigationOptions = {
    title: 'Home Screen Title',
  }
  
  render() {
    return (
      <ContentWrapper>
        <Text>Hello</Text>
      </ContentWrapper>
    );
  }
}

export default Home;
