import React, {memo} from 'react';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import HeaderBack from '../../components/HeaderBack';
import SearchResultItems from '../../organism/search/SearchResultItems';

const SearchResult = () => {
  return (
    <>
      <HeaderBack title="Cari Produk" styles={{elevation: 0}} />
      <ScrollableTabView
        renderTabBar={() => (
          <ScrollableTabBar
            backgroundColor="rgba(255, 255, 255, 0.7)"
            activeTextColor="#1100BB"
          />
        )}>
        <SearchResultItems tabLabel="All" />
        <SearchResultItems tabLabel="Grocery" />
        <SearchResultItems tabLabel="Kitchen" />
        <SearchResultItems tabLabel="Home" />
        <SearchResultItems tabLabel="Gadget" />
        <SearchResultItems tabLabel="Computer" />
      </ScrollableTabView>
    </>
  );
};

export default memo(SearchResult);
