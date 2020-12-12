import React from 'react';
import {FlatList, Text, View} from 'react-native';
import StarRating from '../../components/StarRating';
import ProductReviewItem from './ProductReviewItem';

const Feed = () => {
  const items = require('../../dummy/items.json');

  const _renderHeader = ({item}) => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
          marginVertical: 16,
          flex: 1,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 32}}>5.0</Text>
        <StarRating rating={5} />
      </View>
    );
  };
  const _renderItems = ({item}) => {
    return <ProductReviewItem item={item} />;
  };
  const keyExtractor = (item, index) => {
    return String('ShopList' + index + item.item_id);
  };

  return (
    <>
      <FlatList
        ListHeaderComponent={_renderHeader}
        scrollEventThrottle={16}
        data={items}
        renderItem={_renderItems}
        horizontal={false}
        keyExtractor={keyExtractor}
      />
    </>
  );
};

export default Feed;
