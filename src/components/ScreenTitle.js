import React from 'react';
import {View} from 'react-native';
import {Title} from 'react-native-paper';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';

const ScreenTitle = ({title}) => {
  return (
    <>
      <FocusAwareStatusBar
        translucent={false}
        backgroundColor="rgba(0,0,0,0.3)"
        barStyle="dark-content"
      />
      <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
        <Title>{title}</Title>
      </View>
    </>
  );
};

export default ScreenTitle;
