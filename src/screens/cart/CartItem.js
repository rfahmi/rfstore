import React, {useState} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Avatar, Divider, IconButton, List} from 'react-native-paper';
import {colors} from '../../constants/colors';
import {currencyFormat} from '../../utils/formatter';

const CartItem = ({item}) => {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(true);

  return (
    <>
      {added && (
        <>
          <List.Item
            title={item.item_name}
            titleStyle={{fontSize: 12}}
            titleNumberOfLines={2}
            description={currencyFormat(item.item_price)}
            descriptionStyle={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'orange',
            }}
            style={{elevation: 5}}
            left={() => (
              <View
                style={{
                  aspectRatio: 1 / 1,
                  elevation: 3,
                  borderColor: '#eee',
                  borderWidth: 1,
                }}>
                <FastImage
                  source={{uri: item.item_pic}}
                  style={{flex: 1, backgroundColor: '#eee', borderRadius: 1}}
                />
              </View>
            )}
            right={() => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 16,
                }}>
                <IconButton
                  onPress={() => (qty > 1 ? setQty(qty - 1) : setAdded(false))}
                  color={colors.primary}
                  icon="minus-circle"
                />
                <Text>{qty}</Text>
                <IconButton
                  onPress={() => setQty(qty + 1)}
                  color={colors.primary}
                  icon="plus-circle"
                />
              </View>
            )}
          />
          <Divider />
        </>
      )}
    </>
  );
};

export default CartItem;
