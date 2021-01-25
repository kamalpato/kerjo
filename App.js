import React from 'react';
import { Provider } from 'react-redux'
import store from './src/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from './src/screens/Landing'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import HomeBottomBar from './src/screens/HomeBottomBar'


const Stack = createStackNavigator()
const App: () => React$Node = () => {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Landing'component={Landing}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Home' component={HomeBottomBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;