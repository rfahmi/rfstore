import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Dimensions, FlatList, TouchableOpacity, View} from 'react-native';
import ProductCard from '../../../components/ProductCard';

const ItemGrid = ({data}) => {
  const navigation = useNavigation();
  const keyExtractor = (item, index) => {
    return String(index + item.item_id);
  };
  const _renderItems = ({item, index}) => {
    return (
      <TouchableOpacity
        key={`ItemGrid${item.item_id}-${index}`}
        onPress={() =>
          navigation.push('Search', {screen: 'Product', params: {item_id: 1}})
        }>
        <ProductCard
          item={item}
          style={{
            width: Dimensions.get('window').width / data.panel_param1 - 16,
            margin: 4,
          }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        backgroundColor: data.panel_pic,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <FlatList
        data={data.items}
        renderItem={_renderItems}
        numColumns={data.panel_param1}
        horizontal={false}
        keyExtractor={keyExtractor}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        removeClippedSubviews
      />
    </View>
  );
};

export default memo(ItemGrid);
