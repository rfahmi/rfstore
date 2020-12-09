import React from 'react';
import {StatusBar} from 'react-native';
import WebView from 'react-native-webview';
import HeaderBack from '../../components/HeaderBack';

const SearchWebView = () => {
  return (
    <>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor="rgba(0,0,0,0.1)"
      />
      <HeaderBack title="Promo" />
      <WebView
        cacheEnabled={true}
        javaScriptEnabled={true}
        startInLoadingState={true}
        source={{
          uri: 'https://page.harnic.id/url/season8',
        }}
      />
    </>
  );
};

export default SearchWebView;
