import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import Feed from '../feed';
import Profile from '../profile';
import Settings from '../settings';

const Tabs = createBottomTabNavigator(
  {
    Feed,
    Profile,
    Settings
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];

      return {
        header: null,
        headerTitle: routeName
      };
    }
  }
);

export default Tabs;