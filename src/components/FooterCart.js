import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {Appbar, Button} from 'react-native-paper';
import {colors} from '../constants/colors';
import {currencyFormat} from '../utils/formatter';

const FooterCart = () => {
  const navigation = useNavigation();
  const _handleNext = () => navigation.push('Checkout');

  return (
    <Appbar
      style={{
        backgroundColor: '#fff',
        elevation: 5,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{paddingHorizontal: 16}}>
          <Text style={{color: 'black', fontSize: 10}}>Total Barang</Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'orange'}}>
            Rp{currencyFormat(1000000)}
          </Text>
        </View>

        <Button
          onPress={_handleNext}
          style={{margin: 4}}
          labelStyle={{fontSize: 10}}
          color={colors.primary}
          mode="contained">
          Pilih Pengiriman
        </Button>
      </View>
    </Appbar>
  );
};

export default FooterCart;
