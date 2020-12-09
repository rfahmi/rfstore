import React, {useState} from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {Appbar, List, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Search = ({navigation}) => {
  const [keyword, setKeyword] = useState('');
  return (
    <>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor="rgba(0,0,0,0.1)"
      />
      <Appbar.Header style={{backgroundColor: '#eee', elevation: 0}}>
        <Searchbar
          autoFocus
          placeholder="Cari Produk"
          value={keyword}
          icon={() => <Icon name="arrow-left" size={24} />}
          onChangeText={(text) => setKeyword(text)}
          onIconPress={() => navigation.goBack()}
          onSubmitEditing={() => navigation.push('SearchResult')}
          style={{elevation: 0, flex: 1, backgroundColor: '#eee'}}
        />
      </Appbar.Header>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <List.Item
          onPress={() => navigation.push('SearchResult')}
          title="Gula"
          style={{elevation: 5}}
          right={() => <List.Icon icon="magnify" />}
        />
        <List.Item
          onPress={() => navigation.push('SearchResult')}
          title="Minyak"
          style={{elevation: 5}}
          right={() => <List.Icon icon="magnify" />}
        />
        <List.Item
          onPress={() => navigation.push('SearchResult')}
          title="Indomie"
          style={{elevation: 5}}
          right={() => <List.Icon icon="magnify" />}
        />
        <List.Item
          onPress={() => navigation.push('SearchResult')}
          title="Susu"
          style={{elevation: 5}}
          right={() => <List.Icon icon="magnify" />}
        />
      </ScrollView>
    </>
  );
};

export default Search;
