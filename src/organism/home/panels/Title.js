import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {colors} from '../../../constants/colors';

const Title = ({data}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: 8,
        marginVertical: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: colors.primary}}>
        {data.panel_param1}
      </Text>
      {data.panel_param2 && (
        <Button
          onPress={() =>
            navigation.push('Search', {
              screen: 'SearchWebView',
              url: data.panel_param2,
            })
          }
          mode="contained"
          color={colors.primary}
          labelStyle={{fontSize: 11, margin: 0, textAlign: 'left'}}
          contentStyle={{
            height: 16,
            justifyContent: 'flex-end',
          }}
          uppercase={false}>
          Lihat Semua
        </Button>
      )}
    </View>
  );
};

export default memo(Title);
