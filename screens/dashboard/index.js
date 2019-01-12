import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

import Tabs from './tabs';

const stackNavigator = createStackNavigator(
  {
    DashBoardTabs: Tabs
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
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
);

export default stackNavigator;