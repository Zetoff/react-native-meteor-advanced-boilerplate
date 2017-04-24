import Meteor from 'react-native-meteor';
import React, { Component } from 'react';
import config from './config/config';
import Navigation from './navigation';
import { AlertProvider } from './components/Alert';

Meteor.connect(config.SERVER_URL);

class ReactNativeApp extends Component {
  render() {
    return (
      <AlertProvider>
        <Navigation />
      </AlertProvider>
    );
  }
}

export default ReactNativeApp;
