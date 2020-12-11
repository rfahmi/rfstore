import React from 'react';
import {Animated, Dimensions, StatusBar} from 'react-native';
import {Caption, Title} from 'react-native-paper';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import {colors} from '../constants/colors';

const ScreenTitleParallax = ({title, description, style, opacity}) => {
  return (
    <>
      <FocusAwareStatusBar
        translucent
        backgroundColor="rgba(0,0,0,0.3)"
        barStyle="dark-content"
      />
      <Animated.View
        style={[
          {
            paddingTop: StatusBar.currentHeight,
            backgroundColor: colors.primaryLight,
            height: Dimensions.get('window').width * 0.75,
            position: 'absolute',
            opacity: opacity,
            top: 0,
            left: 0,
            right: 0,
          },
          style,
        ]}>
        <Animated.View style={{paddingHorizontal: 16, paddingVertical: 8}}>
          <Title style={{color: '#fff'}}>{title}</Title>
          <Caption style={{color: '#fff'}}>{description}</Caption>
        </Animated.View>
      </Animated.View>
    </>
  );
};

export default ScreenTitleParallax;
