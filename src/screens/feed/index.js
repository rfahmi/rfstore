import React from 'react';
import {FlatList, View} from 'react-native';
import ScreenTitle from '../../components/ScreenTitle';
import FeedItem from './FeedItem';

const Feed = () => {
  const items = require('../../dummy/items.json');

  const _renderItems = ({item}) => {
    return <FeedItem item={item} />;
  };
  const keyExtractor = (item, index) => {
    return String('ShopList' + index + item.item_id);
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        ListHeaderComponent={() => <ScreenTitle title="Feed" />}
        data={items}
        renderItem={_renderItems}
        horizontal={false}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Feed;
