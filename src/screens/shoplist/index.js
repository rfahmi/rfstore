import React from 'react';
import {FlatList, View} from 'react-native';
import ScreenTitle from '../../components/ScreenTitle';
import Items from './Item';

const Shoplist = () => {
  const items = require('../../dummy/items.json');

  const _renderItems = ({item}) => {
    return <Items item={item} />;
  };
  const keyExtractor = (item, index) => {
    return String('ShopList' + index + item.item_id);
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        ListHeaderComponent={() => <ScreenTitle title="Shoplist" />}
        data={items}
        renderItem={_renderItems}
        horizontal={false}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Shoplist;
