import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard Screen</Text>
      </View>
    );
  }
}

export default Dashboard;