import React, {memo, useState} from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import {Divider, List} from 'react-native-paper';
import HeaderBackTransparent from '../../components/HeaderBackTransparent';
import FooterBuy from '../../components/FooterBuy';
import Separator from '../../components/Separator';
import ProductPictures from '../../organism/product/ProductPictures';

const Product = ({navigation, route}) => {
  const items = require('../../dummy/items.json');
  const pictures = require('../../dummy/item_pictures.json');
  const {item_id} = route.params;
  const item = items.filter((i) => i.item_id === 1);
  const [data, setData] = useState();
  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="rgba(0,0,0,0.1)"
      />
      <HeaderBackTransparent />
      <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
        <View
          style={{
            aspectRatio: 1 / 1,
          }}>
          <ProductPictures pictures={pictures} />
        </View>
        <Divider />
        <View style={{padding: 16}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 8,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'orange',
              }}>
              Rp200,000
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 8,
            }}>
            <View
              style={{
                backgroundColor: 'orange',
                width: 26,
                aspectRatio: 1 / 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
              }}>
              <Text style={{fontSize: 10, color: '#fff'}}>-20%</Text>
            </View>
            <Text
              style={{
                marginLeft: 8,
                fontSize: 12,
                color: '#666',
                textDecorationLine: 'line-through',
              }}>
              Rp600,000
            </Text>
          </View>

          <Text style={{fontSize: 14}} numberOfLines={2}>
            Lorem ipsum dolor sit amet sic mundus creatus est
          </Text>
        </View>

        <Separator />

        <List.Item
          onPress={() => alert('To Do')}
          title="Ongkir"
          // titleStyle={{fontSize: 12}}
          description="Mulai dari Rp0"
          // descriptionStyle={{fontSize: 14}}
          style={{elevation: 5}}
          right={() => <List.Icon icon="chevron-right" />}
        />
        <Separator />

        <View style={{padding: 16}}>
          <Text style={{fontWeight: 'bold'}}>Deskripsi Produk</Text>
          <Text numberOfLines={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            consequat ullamcorper porttitor. Mauris aliquet libero id dolor
            ornare, ut rutrum erat congue. Vestibulum gravida odio eget arcu
            facilisis venenatis. Donec vel urna nec tortor feugiat faucibus.
            Nulla enim nisl, euismod at erat id, luctus fermentum dui. Ut non
            tempor augue, ac luctus tellus. Aliquam erat volutpat. Donec vitae
            libero est. Suspendisse commodo, ex vitae lobortis scelerisque,
            nulla libero varius nibh, vel mattis ligula nisl eget turpis. Donec
            sed nisi massa. Etiam eu mi eu turpis placerat sodales. Donec vitae
            consequat sapien. Sed metus augue, ornare at aliquam vitae, pretium
            in augue.
          </Text>
        </View>

        <View style={{marginBottom: 60}} />
      </ScrollView>
      <FooterBuy />
    </>
  );
};

export default memo(Product);
