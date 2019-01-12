import React, { Component } from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';

import styles from './styles';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>About Screen</Text>
        <Button
          title="Go to Dashboard"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
      </View>
    );
  }
}

export default About;