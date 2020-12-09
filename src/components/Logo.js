import React, {memo} from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = () => (
  <Image source={require('../assets/images/harnic.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 128,
    aspectRatio: 3 / 1,
    resizeMode: 'contain',
    marginBottom: 12,
  },
});

export default memo(Logo);
