import Meteor, { createContainer } from 'react-native-meteor';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import config from './config/config';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

Meteor.connect(config.SERVER_URL);

class ReactNativeApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const ConnectedApp = createContainer(() => {
  const user = Meteor.user();

  return { user };
}, ReactNativeApp);

export default ConnectedApp;
