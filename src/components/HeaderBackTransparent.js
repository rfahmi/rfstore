import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Animated,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderBackTransparent = ({headerOpacity, visibility}) => {
  const navigation = useNavigation();
  const _goBack = () => navigation.goBack();

  const _handleSearch = () => navigation.navigate('Search');

  const HeaderContent = ({transparent}) => {
    return (
      <>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: StatusBar.currentHeight,
            position: 'absolute',
            backgroundColor: transparent ? 'transparent' : '#aaa',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        />
        <TouchableOpacity
          onPress={_goBack}
          style={{
            backgroundColor: transparent ? 'rgba(0,0,0,0.3)' : 'transparent',
            zIndex: 1,
            padding: 8,
            aspectRatio: 1 / 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
          }}>
          <Icon
            name="arrow-left"
            size={22}
            color={transparent ? '#fff' : '#555'}
          />
        </TouchableOpacity>
        {!transparent && (
          <TouchableOpacity
            style={{
              backgroundColor: transparent ? '#fff' : '#eee',
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
        )}
        <View style={{flexDirection: 'row'}}>
          {transparent && (
            <TouchableOpacity
              onPress={_handleSearch}
              style={{
                backgroundColor: transparent
                  ? 'rgba(0,0,0,0.3)'
                  : 'transparent',
                zIndex: 1,
                padding: 8,
                aspectRatio: 1 / 1,
                marginRight: 8,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
              }}>
              <Icon
                name="magnify"
                size={22}
                color={transparent ? '#fff' : '#555'}
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={_handleSearch}
            style={{
              backgroundColor: transparent ? 'rgba(0,0,0,0.3)' : 'transparent',
              zIndex: 1,
              padding: 8,
              aspectRatio: 1 / 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
            }}>
            <Icon name="cart" size={22} color={transparent ? '#fff' : '#555'} />
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <>
      <Animated.View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          opacity: headerOpacity,
          paddingTop: StatusBar.currentHeight + 8,
          paddingHorizontal: 8,
          paddingBottom: 8,
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}>
        <HeaderContent transparent />
      </Animated.View>
      <Animated.View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          opacity: visibility,
          backgroundColor: '#fff',
          paddingTop: StatusBar.currentHeight + 8,
          paddingHorizontal: 8,
          paddingBottom: 8,
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}>
        <HeaderContent />
      </Animated.View>
    </>
  );
};

export default HeaderBackTransparent;
