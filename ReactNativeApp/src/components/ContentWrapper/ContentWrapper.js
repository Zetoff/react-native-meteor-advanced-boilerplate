import React, { PropTypes, PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

class ContentWrapper extends PureComponent {

  static propTypes = {
    scroll: PropTypes.bool,
    children: PropTypes.any, // eslint-disable-line
    passProps: PropTypes.object,
  }

  render() {
    const { scroll, children, passProps } = this.props;
    if (scroll === true) {
      return (
        <ScrollView style={styles.scrollView} {...passProps}>
          {children}
        </ScrollView>
      );
    }

    return (
      <View style={styles.view} {...passProps}>
        {children}
      </View>
    );
  }
}

export default ContentWrapper;
