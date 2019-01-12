import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Dashboard from '../screens/dashboard';
import About from '../screens/about';

const AppDrawer = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard
  },
  About: {
    screen: About
  }
});

export default AppDrawer;