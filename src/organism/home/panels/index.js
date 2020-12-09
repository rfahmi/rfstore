import React from 'react';
import {View} from 'react-native';
import Title from './Title';
import ItemSlide from './ItemSlide';
import ItemGrid from './ItemGrid';
import BannerGrid from './BannerGrid';

const Panels = ({data}) => {
  return (
    <View style={{}}>
      {data.panel_type === 'title' ? (
        <Title data={data} />
      ) : data.panel_type === 'item_slide' ? (
        <ItemSlide data={data} />
      ) : data.panel_type === 'item_grid' ? (
        <ItemGrid data={data} />
      ) : data.panel_type === 'banner_grid' ? (
        <BannerGrid data={data} />
      ) : (
        <View />
      )}
    </View>
  );
};

export default Panels;
