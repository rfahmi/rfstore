import React, {memo, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import {colors} from '../../constants/colors';
import {emailValidator, passwordValidator} from '../../utils/validator';
import {RNToasty} from 'react-native-toasty';

const Login = ({navigation}) => {
  const [email, setEmail] = useState({value: 'test@mail.com', error: ''});
  const [password, setPassword] = useState({value: '123456', error: ''});

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    }
    navigation.navigate('App', {screen: 'Home'});
    RNToasty.Normal({
      title: 'Selamat datang kembali',
      position: 'center',
    });
  };

  return (
    <>
      <BackButton goBack={() => navigation.goBack()} />
      <ScrollView style={{padding: 16}}>
        <Background>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="rgba(0,0,0,0.3)"
          />

          <Logo />

          <Header>Selamat datang kembali.</Header>

          <TextInput
            label="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({value: text, error: ''})}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />

          <TextInput
            label="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({value: text, error: ''})}
            error={!!password.error}
            errorText={password.error}
            secureTextEntry
          />

          <View style={styles.forgotPassword}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.label}>Lupa password?</Text>
            </TouchableOpacity>
          </View>

          <Button mode="contained" onPress={_onLoginPressed}>
            Login
          </Button>

          <View style={styles.row}>
            <Text style={styles.label}>Tidak punya akun? </Text>
            <TouchableOpacity onPress={() => navigation.push('Register')}>
              <Text style={styles.link}>Daftar disini</Text>
            </TouchableOpacity>
          </View>
        </Background>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: colors.grayDark,
  },
  link: {
    fontWeight: 'bold',
    color: colors.primary,
  },
});

export default memo(Login);
