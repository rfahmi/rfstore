import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const StarRating = ({rating}) => {
  const dataMap = [...Array(rating).keys()];
  return (
    <View style={{flexDirection: 'row'}}>
      {dataMap.map((index) => {
        return <Icon name="star" size={16} color={colors.goldYellow} />;
      })}
    </View>
  );
};

export default StarRating;
