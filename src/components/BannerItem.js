import React, {memo} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

const BannerItem = ({image, style}) => {
  return (
    <View style={[{aspectRatio: 2 / 1, backgroundColor: '#eee'}, style]}>
      <FastImage
        style={{
          flex: 1,
        }}
        source={{
          uri: image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
    </View>
  );
};

export default memo(BannerItem);
