import React from 'react';
import {FlatList, View} from 'react-native';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import Banners from '../../organism/home/banners';
import Categories from '../../organism/home/categories';
import Panels from '../../organism/home/panels';
import TopBar from '../../organism/home/topbar';

const Home = () => {
  const banners = require('../../dummy/banners.json');
  const categories = require('../../dummy/categories.json');
  const panels = require('../../dummy/panels.json');

  const _renderTop = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <FocusAwareStatusBar translucent backgroundColor="transparent" />
        <TopBar />
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
    <FlatList
      data={panels}
      ListHeaderComponent={_renderTop}
      renderItem={_renderPanel}
      keyExtractor={keyExtractor}
      removeClippedSubviews
      initialNumToRender={1}
      maxToRenderPerBatch={1}
    />
  );
};

export default Home;
