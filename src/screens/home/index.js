import React, {useRef} from 'react';
import {Animated, View} from 'react-native';
import Banners from '../../organism/home/banners';
import Categories from '../../organism/home/categories';
import Panels from '../../organism/home/panels';
import TopBar from '../../organism/home/topbar';

const Home = () => {
  const banners = require('../../dummy/banners.json');
  const categories = require('../../dummy/categories.json');
  const panels = require('../../dummy/panels.json');

  const scroll = useRef(new Animated.Value(0)).current;

  const _renderTop = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Banners banners={banners} />
        <Categories categories={categories} />
      </View>
    );
  };
  const _renderPanel = ({item, index}) => {
    return <Panels data={item} key={`Panel${item.panel_id}-${index}`} />;
  };

  const keyExtractor = (item, index) => {
    return String(index + item.panel_id);
  };

  return (
    <>
      <TopBar
        headerOpacity={scroll.interpolate({
          inputRange: [0, 300],
          outputRange: [1, 0],
        })}
        visibility={scroll.interpolate({
          inputRange: [0, 300],
          outputRange: [0, 1],
        })}
      />
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scroll}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
        data={panels}
        ListHeaderComponent={_renderTop}
        renderItem={_renderPanel}
        keyExtractor={keyExtractor}
        removeClippedSubviews
        initialNumToRender={1}
        maxToRenderPerBatch={1}
      />
    </>
  );
};

export default Home;
