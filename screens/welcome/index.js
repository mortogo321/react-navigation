import React, { Component } from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';

import styles from './styles';

class Welcome extends Component {
  goTo(screen) {
    return () => {
      this.props.navigation.navigate(screen);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome Screen</Text>
        <Button
          title="Login"
          onPress={this.goTo('Dashboard')}
        />
        <Button
          title="Sign Up"
          onPress={() => {
            alert('button pressed')
          }}
        />
      </View>
    );
  }
}

export default Welcome;