import React from 'react';
import { Text } from 'react-native';

import ContentWrapper from '../components/ContentWrapper';

class Home extends React.PureComponent {

  render() {
    return (
      <ContentWrapper>
        <Text>Hello</Text>
      </ContentWrapper>
    );
  }
}

export default Home;
