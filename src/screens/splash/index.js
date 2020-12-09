import React, {useEffect} from 'react';
import {Image, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('App'), 500);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <View
        style={{
          flex: 3,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            width: 200,
            justifyContent: 'center',
            alignContent: 'center',
            resizeMode: 'contain',
          }}
          source={require('../../assets/images/harnic.png')}
        />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          style={{
            flex: 1,
            height: 100,
            justifyContent: 'center',
            alignContent: 'center',
            resizeMode: 'contain',
          }}
          source={require('../../assets/images/freeongkir.png')}
        />
        <Image
          style={{
            flex: 1,
            height: 100,
            justifyContent: 'center',
            alignContent: 'center',
            resizeMode: 'contain',
          }}
          source={require('../../assets/images/cod.png')}
        />
      </View>
    </View>
  );
};

export default Splash;
