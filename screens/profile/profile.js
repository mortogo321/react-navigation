import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

export default Profile;