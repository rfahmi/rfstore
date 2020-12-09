import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import User from '../../../../screens/user';
const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
};

export default UserStack;
