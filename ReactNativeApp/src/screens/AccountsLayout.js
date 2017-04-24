// NOTE: This is here because I still haven't found a way to add logic to React-Navigation

import React, { PropTypes } from 'react';
import Meteor, { createContainer } from 'react-native-meteor';

import Profile from './Profile';
import SignUp from './SignUp';

class ProfileLayout extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    const { user } = this.props;
    if (user) {
      return <Profile {...this.props} />;
    }
    return <SignUp {...this.props} />;
  }
}

export default createContainer(() => {
  return {
    user: Meteor.user(),
  };
}, ProfileLayout);
