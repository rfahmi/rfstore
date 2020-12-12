import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Appbar, Button, IconButton} from 'react-native-paper';
import {colors} from '../constants/colors';
import {RNToasty} from 'react-native-toasty';

const FooterBuy = () => {
  const navigation = useNavigation();
  const _handleBuy = () => navigation.navigate('App', {screen: 'Cart'});
  const _handleAddCart = () =>
    RNToasty.Success({
      title: 'Ditambahkan',
      position: 'center',
    });

  return (
    <Appbar
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        elevation: 5,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <IconButton
          style={{margin: 4}}
          labelStyle={{fontSize: 10}}
          color={colors.primary}
          icon="message-outline"
        />
        <Button
          onPress={_handleBuy}
          style={{margin: 4}}
          labelStyle={{fontSize: 10}}
          color={colors.primary}
          mode="contained">
          Langsung Beli
        </Button>
        <Button
          onPress={_handleAddCart}
          style={{margin: 4}}
          labelStyle={{fontSize: 10}}
          color={colors.primary}
          mode="outlined">
          Tambah Keranjang
        </Button>
      </View>
    </Appbar>
  );
};

export default FooterBuy;
