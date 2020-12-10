import React, {useState, useRef, useEffect} from 'react';
import {View, Animated, FlatList} from 'react-native';
import Banners from '../../organism/home/banners';
import Categories from '../../organism/home/categories';
import Panels from '../../organism/home/panels';
import TopBar from '../../organism/home/topbar';

const Home = () => {
  const banners = require('../../dummy/banners.json');
  const categories = require('../../dummy/categories.json');
  const panels = require('../../dummy/panels.json');

  const headerOpacity = useRef(new Animated.Value(0)).current;

  const _handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    if (scrollPosition < 200) {
      Animated.timing(headerOpacity, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(headerOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

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
      <TopBar headerOpacity={headerOpacity} />
      <FlatList
        onScroll={_handleScroll}
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
