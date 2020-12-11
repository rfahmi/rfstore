import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {
  Dimensions,
  Animated,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';
import {colors} from '../../../constants/colors';

const HomeTopBar = ({headerOpacity, visibility}) => {
  const navigation = useNavigation();

  const HeaderContent = ({mode}) => {
    return (
      <>
        <FocusAwareStatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <View
          style={{
            width: Dimensions.get('window').width,
            height: StatusBar.currentHeight,
            position: 'absolute',
            backgroundColor: mode === 'light' ? 'transparent' : colors.gray,
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: mode === 'light' ? '#fff' : colors.grayLight,
            borderRadius: 8,
            padding: 8,
            flex: 1,
            opacity: 1,
          }}
          onPress={() => navigation.navigate('Search')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon color="#999" size={14} name="magnify" />
            <Text style={{fontSize: 14, color: '#999', marginLeft: 5}}>
              Cari produk
            </Text>
          </View>
        </TouchableOpacity>
        <IconButton
          icon="bell"
          color={mode === 'light' ? colors.white : colors.grayDark}
          size={24}
          style={{zIndex: 1}}
          onPress={() => console.log('Pressed')}
        />
      </>
    );
  };
  return (
    <>
      <Animated.View
        style={{
          paddingTop: StatusBar.currentHeight,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 8,
          zIndex: 1,
          flex: 1,
          alignItems: 'center',
          opacity: headerOpacity,
          flexDirection: 'row',
        }}>
        <HeaderContent mode="light" />
      </Animated.View>
      <Animated.View
        style={{
          paddingTop: StatusBar.currentHeight,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 8,
          zIndex: 1,
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#fff',
          opacity: visibility,
          flexDirection: 'row',
        }}>
        {/* <FocusAwareStatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(200,200,200,0)"
        /> */}
        <HeaderContent mode="dark" />
      </Animated.View>
    </>
  );
};

export default memo(HomeTopBar);
