import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Dimensions, FlatList, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import ProductCard from '../../../components/ProductCard';

const ItemSlide = ({data}) => {
  const navigation = useNavigation();
  const keyExtractor = (item, index) => {
    return String(index + item.item_id);
  };
  const _renderItems = ({item, index}) => {
    return (
      <TouchableOpacity
        key={`ItemSlide${item.item_id}-${index}`}
        onPress={() =>
          navigation.push('Search', {screen: 'Product', params: {item_id: 1}})
        }>
        <ProductCard
          item={item}
          style={{width: Dimensions.get('window').width / 4, margin: 4}}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{backgroundColor: data.panel_color1, flexDirection: 'row'}}>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          height: '100%',
          aspectRatio: 1 / 2,
        }}>
        <FastImage
          style={{
            flex: 1,
            borderRadius: 10,
          }}
          source={{
            uri: data.panel_pic,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <FlatList
        contentContainerStyle={{
          marginLeft: 100,
          marginVertical: 8,
        }}
        data={data.items}
        renderItem={_renderItems}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        removeClippedSubviews={true}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default memo(ItemSlide);
