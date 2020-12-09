import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderBackTransparent = () => {
  const navigation = useNavigation();
  const _goBack = () => navigation.goBack();

  const _handleSearch = () => navigation.navigate('Search');

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        padding: 8,
        top: StatusBar.currentHeight,
        left: 0,
        right: 0,
        zIndex: 1,
      }}>
      <TouchableOpacity
        onPress={_goBack}
        style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 1,
          padding: 8,
          aspectRatio: 1 / 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
        }}>
        <Icon name="arrow-left" size={22} color="#fff" />
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={_handleSearch}
          style={{
            marginRight: 8,
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 1,
            padding: 8,
            aspectRatio: 1 / 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          }}>
          <Icon name="cart" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_handleSearch}
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 1,
            padding: 8,
            aspectRatio: 1 / 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          }}>
          <Icon name="magnify" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderBackTransparent;
