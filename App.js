import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import RootStack from './src/configs/navigation';
import {store} from './src/configs/redux';
import {colors} from './src/constants/colors';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
    },
  };
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
