import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  Avatar,
  Badge,
  Button,
  Divider,
  List,
  Surface,
  Title,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../constants/colors';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import Separator from '../../components/Separator';
import {currencyFormat} from '../../utils/formatter';

const User = ({navigation}) => {
  return (
    <>
      <FocusAwareStatusBar
        backgroundColor="rgba(0,0,0,0.3)"
        barStyle="dark-content"
      />
      <ScrollView style={{marginHorizontal: 0, backgroundColor: '#fff'}}>
        <View
          style={{
            margin: 16,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <Title style={{fontWeight: '600', color: colors.primaryDark}}>
              Fahmi Rizalul
            </Title>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: colors.grayLight,
                borderRadius: 6,
                padding: 6,
              }}>
              <Text style={{fontSize: 12, color: colors.primaryDark}}>
                rfahmi@outlook.com
              </Text>
              <Icon name="check-circle" color={colors.green} size={16} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 8,
                padding: 6,
              }}>
              <Text style={{fontSize: 12, color: colors.grayDark}}>
                Point: {currencyFormat(200000)}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => {
                alert('To Do');
              }}>
              <Avatar.Image
                size={80}
                style={{backgroundColor: 'transparent'}}
                source={require('../../assets/images/cs.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Separator />
        <List.Section>
          <List.Subheader>Pesanan</List.Subheader>
          <Surface
            style={{
              flex: 1,
              flexDirection: 'row',
              marginHorizontal: 16,
              borderRadius: 6,
              elevation: 0,
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#eee',
                borderRadius: 6,
                aspectRatio: 1 / 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 8,
                padding: 6,
              }}>
              <Icon
                color={colors.grayDark}
                size={22}
                name="clock-check-outline"
              />
              <Text style={{fontSize: 10}}>Baru</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#eee',
                borderRadius: 6,
                aspectRatio: 1 / 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 8,
                padding: 6,
              }}>
              <Icon
                color={colors.grayDark}
                size={22}
                name="package-variant-closed"
              />
              <Text style={{fontSize: 10}}>Disiapkan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#eee',
                borderRadius: 6,
                aspectRatio: 1 / 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 8,
                padding: 6,
              }}>
              <Icon
                color={colors.grayDark}
                size={22}
                name="truck-fast-outline"
              />
              <Text style={{fontSize: 10}}>Dikirim</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: '#eee',
                borderRadius: 6,
                aspectRatio: 1 / 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 8,
                padding: 6,
              }}>
              <Icon color={colors.grayDark} size={22} name="check" />
              <Text style={{fontSize: 10}}>Diterima</Text>
            </TouchableOpacity>
          </Surface>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingRight: 8,
            }}>
            <Button mode="text" color={colors.grayDark} uppercase={false}>
              <Text
                style={{
                  fontSize: 10,
                }}>
                Lihat Semua
              </Text>
            </Button>
          </View>
        </List.Section>
        <Separator />
        <List.Section>
          <List.Subheader>Pengaturan</List.Subheader>
          <List.Item
            title="Data Pengguna"
            left={() => <List.Icon icon="account-outline" />}
          />
          <Divider />
          <List.Item
            title="Password"
            left={() => <List.Icon icon="lock-outline" />}
          />
          <Divider />
          <List.Item
            title="Alamat Kirim"
            left={() => <List.Icon icon="map-marker-outline" />}
          />
          <Divider />
          <List.Item
            title="Kartu Kredit"
            left={() => <List.Icon icon="credit-card-outline" />}
          />
          <Divider />
          <List.Item
            title="Notifikasi"
            left={() => <List.Icon icon="bell-outline" />}
            right={() => (
              <View
                style={{
                  marginRight: 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Badge
                  visible={true}
                  style={{backgroundColor: 'orange', color: '#fff'}}>
                  5
                </Badge>
              </View>
            )}
          />
          <Divider />
          <List.Item
            title="Aktivasi Akun"
            left={() => <List.Icon icon="check" />}
          />
        </List.Section>
        <Separator />
        <List.Section>
          <List.Subheader>Informasi Lainnya</List.Subheader>
          <List.Item
            title="Informasi Pembayaran"
            left={() => <List.Icon icon="credit-card-outline" />}
          />
          <Divider />
          <List.Item
            title={`Shipping ${'&'} Delivery`}
            left={() => <List.Icon icon="truck-check-outline" />}
          />
          <Divider />
          <List.Item
            title="Informasi Return"
            left={() => <List.Icon icon="backup-restore" />}
          />
          <Divider />
          <List.Item
            title="Tentang Harnic"
            left={() => <List.Icon icon="information-outline" />}
          />
          <Divider />
          <List.Item
            title="Kebijakan Privasi"
            left={() => <List.Icon icon="shield-alert-outline" />}
          />
        </List.Section>
        <View style={{marginVertical: 16}} />
        <View style={{margin: 16}}>
          <Button
            mode="contained"
            color={colors.red}
            style={{borderRadius: 30, elevation: 0}}
            onPress={() => {
              AsyncStorage.clear();
              navigation.navigate('Auth');
            }}>
            Log Out
          </Button>
        </View>
        <View style={{flex: 1, alignItems: 'center', height: 50}}>
          <Text style={{color: colors.gray, fontSize: 12}}>Versi 3.0.0</Text>
          <Text style={{color: colors.gray, fontSize: 12}}>
            {'\u00A9'} Fahmi Rizalul
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default User;
