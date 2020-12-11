import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Card} from 'react-native-paper';

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
        <Card.Actions style={{justifyContent: 'flex-end'}}>
          <Button onPress={_handleClaim} uppercase={false} mode="contained">
            Klaim Sekarang
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default FeedItem;
