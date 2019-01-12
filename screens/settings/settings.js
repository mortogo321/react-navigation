import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}

export default Settings;