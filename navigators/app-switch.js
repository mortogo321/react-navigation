import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import AppDrawer from './app-drawer';
import Welcome from '../screens/welcome';

const AppSwitch = createSwitchNavigator({
  Welcome: {
    screen: Welcome
  },
  Dashboard: {
    screen: AppDrawer
  }
});

export default AppSwitch;