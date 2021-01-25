import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import Home from './Home'
import Profile from './Profile'
import Comments from './Abs'

const Tab = createMaterialBottomTabNavigator()
const HomeBottomBar = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Comments' component={Comments} />
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
}

export default HomeBottomBar;
