import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

import Settings from './settings';

const StackNavigator = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Settings',
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
});

export default StackNavigator;