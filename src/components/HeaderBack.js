import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Appbar} from 'react-native-paper';

const HeaderBack = ({title, styles}) => {
  const navigation = useNavigation();
  const _goBack = () => navigation.goBack();

  const _handleSearch = () => navigation.navigate('Search');

  return (
    <Appbar.Header style={[{backgroundColor: '#fff'}, styles]}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title={title} />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
    </Appbar.Header>
  );
};

export default HeaderBack;
