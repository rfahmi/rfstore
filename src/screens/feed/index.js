import React, {useRef} from 'react';
import {Animated, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {RNToasty} from 'react-native-toasty';
import ScreenTitleParallax from '../../components/ScreenTitleParallax';
import FeedItem from './FeedItem';

const Feed = () => {
  const items = require('../../dummy/items.json');
  const scroll = useRef(new Animated.Value(0)).current;
  const _handleClaim = () => {
    RNToasty.Success({
      title: 'Promosi di klaim',
      position: 'center',
    });
  };
  const styles = StyleSheet.create({
    titleBar: {
      transform: [
        {
          translateY: scroll.interpolate({
            inputRange: [0, 100],
            outputRange: [0, -10],
          }),
        },
      ],
    },
  });

  const _renderItems = ({item}) => {
    return (
      <TouchableOpacity onPress={_handleClaim}>
        <FeedItem item={item} />
      </TouchableOpacity>
    );
  };
  const keyExtractor = (item, index) => {
    return String('ShopList' + index + item.item_id);
  };

  return (
    <>
      <ScreenTitleParallax
        title="Feed"
        description="Temukan promo menarik disini"
        style={styles.titleBar}
        opacity={scroll.interpolate({
          inputRange: [0, 300],
          outputRange: [1, 0],
        })}
      />
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scroll}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
        contentContainerStyle={{marginTop: 100 + StatusBar.currentHeight}}
        data={items}
        renderItem={_renderItems}
        horizontal={false}
        keyExtractor={keyExtractor}
      />
    </>
  );
};

export default Feed;
