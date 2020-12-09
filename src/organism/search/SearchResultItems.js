import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Dimensions, FlatList, View, TouchableOpacity} from 'react-native';
import ProductCard from '../../components/ProductCard';

const SearchResultItems = () => {
  const navigation = useNavigation();
  const items = require('../../dummy/items.json');
  const _renderItems = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.push('Product', {item_id: 1})}>
        <ProductCard
          key={item + index}
          item={item}
          style={{width: Dimensions.get('window').width / 2 - 16, margin: 4}}
        />
      </TouchableOpacity>
    );
  };
  const keyExtractor = (item, index) => {
    return String('SearchItem' + index + item.item_id);
  };
  return (
    <View style={{flexDirection: 'row', flex: 1}}>
      <FlatList
        contentContainerStyle={{
          alignItems: 'center',
        }}
        data={items}
        renderItem={_renderItems}
        numColumns={2}
        horizontal={false}
        keyExtractor={keyExtractor}
        removeClippedSubviews
        initialNumToRender={8}
        maxToRenderPerBatch={4}
      />
    </View>
  );
};

export default memo(SearchResultItems);
