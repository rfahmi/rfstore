import React from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import StarRating from '../../components/StarRating';

const ProductReviewItem = ({item}) => {
  return (
    <View>
      <Card
        style={{
          marginHorizontal: 8,
          marginVertical: 4,
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
        elevation={0}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontWeight: 'bold'}}>Nama Orang</Text>
          <Text style={{marginHorizontal: 8}}>{'\u2022'}</Text>
          <StarRating rating={5} />
        </View>
        <Text style={{fontSize: 12}}>
          lorem ipsum dolor sit amet sic mundus creatus est
        </Text>
      </Card>
    </View>
  );
};

export default ProductReviewItem;
