import React, {memo} from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {currencyFormat} from '../utils/formatter';

const ProductCard = ({item, style}) => {
  return (
    <View
      style={[{backgroundColor: '#fff', elevation: 2, borderRadius: 4}, style]}>
      <View style={{aspectRatio: 1 / 1}}>
        <FastImage
          style={{
            flex: 1,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
          source={{
            uri: item.item_pic,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={{padding: 4}}>
        <Text style={{fontSize: 10}} numberOfLines={2}>
          {item.item_name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'orange',
            marginTop: 8,
          }}>
          Rp{currencyFormat(200000)}
        </Text>
      </View>
    </View>
  );
};

export default memo(ProductCard);
