import Meteor, { createContainer } from 'react-native-meteor';
import React, { Component } from 'react';
import config from './config/config';
import Navigation from './navigation';

Meteor.connect(config.SERVER_URL);

class ReactNativeApp extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}

const ConnectedApp = createContainer(() => {
  const user = Meteor.user();

  return { user };
}, ReactNativeApp);

export default ConnectedApp;
