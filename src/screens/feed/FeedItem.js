import React from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';

const FeedItem = ({item}) => {
  const _handleClaim = () => {
    console.warn('claimed');
  };
  return (
    <View>
      <Card style={{margin: 8}} elevation={8}>
        <Card.Title
          title="Diskon Akhir Tahun"
          subtitle="Berlaku hingga: 20 Januari 2020"
        />
        <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      </Card>
    </View>
  );
};

export default FeedItem;
