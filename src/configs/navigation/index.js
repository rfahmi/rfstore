import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Splash from '../../screens/splash';
import AppStack from './app';
import AuthStack from './auth';
import SearchStack from './search';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen name="Search" component={SearchStack} />
    </Stack.Navigator>
  );
};

export default RootStack;
