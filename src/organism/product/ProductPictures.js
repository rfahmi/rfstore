import React, {memo} from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-smart-carousel';

const ProductPictures = ({pictures}) => {
  console.log(pictures);
  const HEADER_MAX_HEIGHT = Dimensions.get('window').width;
  return (
    <Carousel
      data={pictures}
      autoPlay={false}
      height={HEADER_MAX_HEIGHT}
      onPress={(e) => console.log(e)}
      navigation={true}
      navigationColor={'#ffffff'}
      navigationType={'dot'}
    />
  );
};

export default memo(ProductPictures);
