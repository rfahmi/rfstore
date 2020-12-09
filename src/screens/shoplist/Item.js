import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Avatar, Button, List, Divider, IconButton} from 'react-native-paper';
import {colors} from '../../constants/colors';
import {currencyFormat} from '../../utils/formatter';

const Item = ({item}) => {
  const [qty, setQty] = useState(0);
  const [added, setAdded] = useState(false);

  return (
    <>
      <List.Item
        title={item.item_name}
        titleStyle={{fontSize: 12}}
        titleNumberOfLines={2}
        description={currencyFormat(item.item_price)}
        descriptionStyle={{fontSize: 14, fontWeight: 'bold', color: 'orange'}}
        style={{elevation: 5}}
        left={() => (
          <Avatar.Image
            source={{uri: item.item_pic}}
            icon="folder"
            style={{backgroundColor: '#eee'}}
          />
        )}
        right={() => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 16,
            }}>
            {added ? (
              <>
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
              </>
            ) : (
              <Button
                mode="contained"
                onPress={() => {
                  setAdded(true);
                  setQty(1);
                }}
                uppercase={false}>
                Beli Lagi
              </Button>
            )}
          </View>
        )}
      />
      <Divider />
    </>
  );
};

export default Item;
