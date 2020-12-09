import React, {memo, useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Header from '../../components/Header';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import BackButton from '../../components/BackButton';
import {colors} from '../../constants/colors';
import {emailValidator} from '../../utils/validator';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState({value: '', error: ''});

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }

    navigation.goBack();
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.goBack()} />

      <Logo />

      <Header>Lupa Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Kirim Instruksi Reset
      </Button>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    color: colors.grayDark,
    width: '100%',
  },
});

export default memo(ForgotPassword);
