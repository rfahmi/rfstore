import {useNavigation} from '@react-navigation/native';
import React, {memo, useEffect, useState} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../constants/colors';
import FocusAwareStatusBar from '../../../components/FocusAwareStatusBar';

const HomeTopBar = ({headerOpacity}) => {
  const navigation = useNavigation();
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    if (!headerOpacity) {
      return;
    }
    const listenerId = headerOpacity.addListener((a) => {
      setOpacity(a.value);
    });
    return () => headerOpacity.removeListener(listenerId);
  });
  return (
    <>
      <FocusAwareStatusBar
        translucent
        barStyle={0 < 0.5 ? 'light-content' : 'dark-content'}
        backgroundColor={`rgba(200,200,200,${opacity})`}
      />
      <View
        style={{
          marginTop: StatusBar.currentHeight,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 8,
          zIndex: 1,
          flex: 1,
          alignItems: 'center',
          backgroundColor: `rgba(255,255,255,${opacity})`,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            borderRadius: 8,
            padding: 8,
            flex: 1,
            elevation: opacity,
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
          color={opacity < 0.5 ? colors.white : colors.grayDark}
          size={24}
          style={{zIndex: 1}}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </>
  );
};

export default memo(HomeTopBar);
