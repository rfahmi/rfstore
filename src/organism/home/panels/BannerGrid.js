import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Dimensions, FlatList, TouchableOpacity} from 'react-native';
import BannerItem from '../../../components/BannerItem';

const BannerGrid = ({data}) => {
  const navigation = useNavigation();
  const keyExtractor = (item, index) => {
    return String(index + item.banner_id);
  };
  const _renderItems = ({item, index}) => {
    return (
      <TouchableOpacity
        key={`BannerGrid${item.banner_id}-${index}`}
        onPress={() =>
          navigation.push('Search', {
            screen: 'SearchWebView',
            url: data.panel_param2,
          })
        }>
        <BannerItem
          image={item.banner_url}
          style={{width: Dimensions.get('window').width / data.panel_param1}}
        />
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={data.items}
      renderItem={_renderItems}
      numColumns={data.panel_param1}
      horizontal={false}
      keyExtractor={keyExtractor}
    />
  );
};

export default memo(BannerGrid);
