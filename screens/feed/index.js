import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

import Feed from './feed';
import Detail from './detail';

const StackNavigator = createStackNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Feed',
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
    },
    Detail: {
      screen: Detail
    }
  }, {
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default StackNavigator;