import React from 'react';
import {FlatList, View} from 'react-native';
import ScreenTitle from '../../components/ScreenTitle';
import CartItem from './CartItem';
import FooterCart from '../../components/FooterCart';

const Cart = () => {
  const items = require('../../dummy/items.json');

  const _renderItems = ({item}) => {
    return <CartItem item={item} />;
  };
  const keyExtractor = (item, index) => {
    return String('Cart' + index + item.item_id);
  };
  return (
    <>
      <FlatList
        contentContainerStyle={{backgroundColor: '#fff'}}
        ListHeaderComponent={() => <ScreenTitle title="Cart" />}
        data={items}
        renderItem={_renderItems}
        horizontal={false}
        keyExtractor={keyExtractor}
      />
      <FooterCart />
    </>
  );
};

export default Cart;
