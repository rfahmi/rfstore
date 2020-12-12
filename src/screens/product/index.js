import React, {memo, useRef, useState} from 'react';
import {Animated, Dimensions, StatusBar, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Divider, List, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FooterBuy from '../../components/FooterBuy';
import HeaderBackTransparent from '../../components/HeaderBackTransparent';
import Separator from '../../components/Separator';
import {colors} from '../../constants/colors';
import ProductPictures from '../../organism/product/ProductPictures';
import SimilarProducts from '../../organism/product/SimilarProducts';
import BottomSheet from 'reanimated-bottom-sheet';
import {currencyFormat} from '../../utils/formatter';

const Product = ({navigation, route}) => {
  const WINDOW_HEIGHT = Dimensions.get('window').height;
  const WINDOW_WIDTH = Dimensions.get('window').width;
  const items = require('../../dummy/items.json');
  const pictures = require('../../dummy/item_pictures.json');
  const ongkirSheet = useRef(null);
  const scroll = useRef(new Animated.Value(0)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const [descExpand, setDescExpand] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const _toggleDesc = () => {
    descExpand ? setDescExpand(false) : setDescExpand(true);
  };

  const renderSheetOngkir = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: WINDOW_HEIGHT,
      }}>
      <Title>Pengiriman</Title>
      <View style={{flexDirection: 'row', marginVertical: 8}}>
        <View style={{flex: 1}}>
          <Text>Dikirim dari:</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={{textAlign: 'right'}}>Jakarta Barat</Text>
        </View>
      </View>
      <Divider />
      <View style={{flexDirection: 'row', marginVertical: 8}}>
        <View style={{flex: 1}}>
          <Text>Penerima (Default):</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={{textAlign: 'right'}}>Fahmi</Text>
        </View>
      </View>
      <Divider />
      <View style={{flexDirection: 'row', marginVertical: 8}}>
        <View style={{flex: 1}}>
          <Text>Alamat:</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={{textAlign: 'right'}}>
            Jl. Pinangsia Timur 2N, Tamansari, Jakarta Barat
          </Text>
        </View>
      </View>

      <Title>Ongkir</Title>
      <View style={{flexDirection: 'row', marginVertical: 8}}>
        <View style={{flex: 1}}>
          <Text>Xpress (3 Jam)</Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row'}}>
          <Text style={{textAlign: 'right'}}>Rp{currencyFormat(25000)}</Text>
        </View>
      </View>
      <Divider />
      <View style={{flexDirection: 'row', marginVertical: 8}}>
        <View style={{flex: 1}}>
          <Text>Sameday</Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row'}}>
          <Text
            style={{
              textAlign: 'right',
              fontWeight: 'bold',
              color: colors.green,
            }}>
            GRATIS
          </Text>
        </View>
      </View>
      <Divider />
      <View style={{flexDirection: 'row', marginVertical: 8}}>
        <View style={{flex: 1}}>
          <Text>Nextday</Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row'}}>
          <Text
            style={{
              textAlign: 'right',
              fontWeight: 'bold',
              color: colors.green,
            }}>
            GRATIS
          </Text>
        </View>
      </View>
      <Divider />
      <View style={{flexDirection: 'row', marginVertical: 8}}>
        <View style={{flex: 1}}>
          <Text>JNE Reguler</Text>
        </View>
        <View
          style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row'}}>
          <Text style={{textAlign: 'right'}}>Tidak Tersedia</Text>
        </View>
      </View>
    </View>
  );
  const renderHeader = () => (
    <View
      style={{
        backgroundColor: '#eee',
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 40,
            height: 8,
            borderRadius: 4,
            backgroundColor: '#aaa',
          }}
        />
      </View>
    </View>
  );

  const renderBackDrop = () => (
    <Animated.View
      style={{
        opacity: backdropOpacity,
        backgroundColor: '#000',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9,
      }}>
      <TouchableOpacity
        style={{
          width: WINDOW_WIDTH,
          height: WINDOW_HEIGHT,
          backgroundColor: 'transparent',
        }}
        activeOpacity={1}
        onPress={onClose}
      />
    </Animated.View>
  );

  const onClose = () => {
    Animated.timing(backdropOpacity, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();
    ongkirSheet.current.snapTo(0);
    setTimeout(() => {
      setShowBackdrop(false);
    }, 50);
  };

  const onOpen = () => {
    setShowBackdrop(true);
    ongkirSheet.current.snapTo(2);
    Animated.timing(backdropOpacity, {
      toValue: 0.7,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="rgba(0,0,0,0.1)"
      />
      {showBackdrop && renderBackDrop()}
      <BottomSheet
        enabledContentTapInteraction={false}
        ref={ongkirSheet}
        snapPoints={['-10%', WINDOW_HEIGHT * 0.7]}
        initialSnap={0}
        borderRadius={0}
        renderContent={renderSheetOngkir}
        renderHeader={renderHeader}
        onCloseEnd={onClose}
      />
      <HeaderBackTransparent
        headerOpacity={scroll.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0],
        })}
        visibility={scroll.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 1],
        })}
      />
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scroll}}}],
          {useNativeDriver: true},
        )}
        style={{backgroundColor: '#fff', flex: 1}}>
        <View
          style={{
            aspectRatio: 1 / 1,
            position: 'relative',
          }}>
          <ProductPictures pictures={pictures} />
          <View
            style={{
              position: 'absolute',
              backgroundColor: '#fff',
              bottom: -10,
              padding: 4,
              borderTopLeftRadius: 4,
              borderBottomLeftRadius: 4,
              right: 0,
              elevation: 2,
            }}>
            <Image
              source={require('../../assets/images/xpress-label-b.png')}
              style={{height: 22, aspectRatio: 5 / 1, alignItems: 'center'}}
              resizeMode="contain"
            />
          </View>
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

          <Text style={{fontSize: 18, fontWeight: 'bold'}} numberOfLines={2}>
            Sereal Granola Dark Chocolate Hazelnut 300gr
          </Text>
          <Text style={{fontSize: 12, marginVertical: 8}} numberOfLines={3}>
            Lorem ipsum dolor sit amet sic mundus creatus est Lorem ipsum dolor
            sit amet sic mundus creatus est Lorem ipsum dolor sit amet sic
            mundus creatus est
          </Text>
        </View>

        <Separator />

        <List.Item
          onPress={onOpen}
          title="Ongkir"
          titleStyle={{fontWeight: 'bold'}}
          description="Mulai dari Rp0"
          style={{elevation: 5}}
          right={() => <List.Icon icon="chevron-right" />}
        />

        <Separator />

        <View style={{padding: 16}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            Deskripsi Lengkap
          </Text>
          <TouchableOpacity onPress={_toggleDesc}>
            <Text numberOfLines={descExpand ? 0 : 6}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse consequat ullamcorper porttitor. Mauris aliquet libero
              id dolor ornare, ut rutrum erat congue. Vestibulum gravida odio
              eget arcu facilisis venenatis. Donec vel urna nec tortor feugiat
              faucibus. Nulla enim nisl, euismod at erat id, luctus fermentum
              dui. Ut non tempor augue, ac luctus tellus. Aliquam erat volutpat.
              {'\n'}
              Donec vitae libero est. Suspendisse commodo, ex vitae lobortis
              scelerisque, nulla libero varius nibh, vel mattis ligula nisl eget
              turpis. Donec sed nisi massa. Etiam eu mi eu turpis placerat
              sodales. Donec vitae consequat sapien. Sed metus augue, ornare at
              aliquam vitae, pretium in augue.
            </Text>
            <View
              style={{
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: 24,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name={descExpand ? 'chevron-up' : 'chevron-down'}
                  size={18}
                  color={colors.primary}
                />
                <Text style={{fontStyle: 'italic', color: colors.primary}}>
                  {descExpand ? 'Lihat Lebih Sedikit' : 'Lihat Lebih Banyak'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <Separator />
        <View style={{padding: 16}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Ulasan Pembeli
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 12}}>10 Ulasan</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
                flex: 1,
              }}>
              <Icon name="star" size={24} color={colors.goldYellow} />
              <Text style={{fontWeight: 'bold', fontSize: 24}}>5.0</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Icon name="chevron-down" size={18} color={colors.primary} />
            <Text style={{fontStyle: 'italic', color: colors.primary}}>
              Lihat Semua Ulasan
            </Text>
          </TouchableOpacity>
        </View>

        <Separator />

        <SimilarProducts data={items} />
      </Animated.ScrollView>
      <FooterBuy />
    </>
  );
};

export default memo(Product);
