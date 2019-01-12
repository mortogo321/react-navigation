import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Detail Screen</Text>
      </View>
    );
  }
}

export default Detail;