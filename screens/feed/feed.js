import React, { Component } from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';

import styles from './styles';

class Feed extends Component {
  goTo(screen) {
    return () => {
      this.props.navigation.navigate(screen);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Feed Screen</Text>
        <Button
          title="Go to Detail"
          onPress={this.goTo('Detail')}
        />
      </View>
    );
  }
}

export default Feed;