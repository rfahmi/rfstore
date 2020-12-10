import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Dimensions, Image, View} from 'react-native';
import Carousel from 'react-native-smart-carousel';

const Banners = ({banners}) => {
  const navigation = useNavigation();
  const HEADER_MAX_HEIGHT = Dimensions.get('window').width * 0.75;
  return (
    <View style={{position: 'relative', marginBottom: 16}}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#fff',
          bottom: -10,
          padding: 4,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
          left: 0,
          zIndex: 1,
          elevation: 5,
        }}>
        <Image
          source={require('../../../assets/images/rfstore-label.png')}
          style={{height: 16, aspectRatio: 5 / 1, alignItems: 'center'}}
          resizeMode="contain"
        />
      </View>

      <Carousel
        data={banners}
        autoPlay={false}
        height={HEADER_MAX_HEIGHT}
        onPress={(e) =>
          navigation.push('Search', {screen: 'SearchWebView', params: {url: e}})
        }
        navigation={true}
        navigationColor={'#ffffff'}
        navigationType="dot"
      />
    </View>
  );
};

export default memo(Banners);
