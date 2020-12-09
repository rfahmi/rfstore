import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../../../screens/search';
import SearchResult from '../../../screens/search/SearchResult';
import Product from '../../../screens/product';
import SearchWebView from '../../../screens/search/SearchWebView';
const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen
        name="SearchWebView"
        component={SearchWebView}
        options={{title: 'Loading'}}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
