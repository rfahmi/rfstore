import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../../constants/colors';

const HomeTopBar = () => {
  const navigation = useNavigation();
  return (
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
        backgroundColor: 'transparent',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          borderRadius: 8,
          padding: 8,
          flex: 1,
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
        color={colors.white}
        size={24}
        style={{zIndex: 1}}
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

export default memo(HomeTopBar);
