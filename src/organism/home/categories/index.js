import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Dimensions, FlatList, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';

const Categories = ({categories}) => {
  const navigation = useNavigation();
  const _renderItems = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.push('Search', {screen: 'SearchWebView'})}>
        <View
          style={{
            width: (Dimensions.get('window').width - 16) / 3,
            aspectRatio: 1 / 1,
            borderWidth: 2,
            borderColor: 'transparent',
          }}>
          <FastImage
            style={{
              width: undefined,
              height: undefined,
              flex: 1,
              borderRadius: 10,
            }}
            source={{
              uri: item.cat_pic,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      </TouchableOpacity>
    );
  };
  const keyExtractor = (item, index) => {
    return String(index + item.cat_id);
  };
  return (
    <FlatList
      data={categories}
      renderItem={_renderItems}
      numColumns={3}
      horizontal={false}
      keyExtractor={keyExtractor}
    />
  );
};

export default memo(Categories);
