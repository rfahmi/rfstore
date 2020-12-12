import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Dimensions, TouchableOpacity, View, Text, FlatList} from 'react-native';
import ProductCard from '../../components/ProductCard';
import {colors} from '../../constants/colors';

const SimilarProducts = ({data}) => {
  const navigation = useNavigation();

  const keyExtractor = (item, index) => {
    return String(index + item.item_id);
  };
  const _renderItems = ({item, index}) => {
    console.log(item);
    return (
      <TouchableOpacity
        key={`SimilarProducts${item.item_id}-${index}`}
        onPress={() => navigation.push('Product', {item_id: 1})}>
        <ProductCard
          item={item}
          style={{
            width: Dimensions.get('window').width / 2 - 16,
            margin: 4,
          }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View
        style={{
          paddingHorizontal: 8,
          marginVertical: 8,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: colors.primary}}>
          Produk Serupa
        </Text>
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{alignItems: 'center'}}
        renderItem={_renderItems}
        numColumns={2}
        horizontal={false}
        keyExtractor={keyExtractor}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        removeClippedSubviews
      />
    </>
  );
};

export default memo(SimilarProducts);
