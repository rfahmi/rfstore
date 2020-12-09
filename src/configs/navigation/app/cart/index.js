import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../../../../screens/cart';
import Checkout from '../../../../screens/cart/Checkout';
const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{headerShown: true, title: 'Pilih Pengiriman'}}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
