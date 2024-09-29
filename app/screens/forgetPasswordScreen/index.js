import React, { useEffect, useState } from 'react'
import { View, Text, ToastAndroid, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Button, Header, InputBox, Screen } from '../../components'
import { IcBackArrow, IcInputError, } from '../../theme'
import { EmailValidation } from '../../utils';
import * as styles from './styles';

export const ForgetPasswordScreen = () => {

  const navigation = useNavigation();

  const [inputField, setInputField] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true)

  const handleBtnPress = () => {
    let error;
    if(!inputField) {
      error = 'Please enter your email address'
    }
    else if(!EmailValidation(inputField)){
      error = 'Invalid Email'
    }
    else {
      Keyboard.dismiss();
      ToastAndroid.show('4 digit code sent to given email.', ToastAndroid.SHORT);
      navigation.navigate('verificationCodeScreen', { email: inputField })
    }
    setError(error);
    return error === ''
  }

  const checkDisabledButton = () => {
    if (inputField) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  }

  useEffect(() => {
    checkDisabledButton()
  },[inputField])

  return (
    <Screen translucent={true}>
      <View style={styles.mainView()}>
        <Header
          headerStyle={styles.header()}
          headerLeftIcon
          leftIcon={() => (<IcBackArrow />)}
        />
        <Text style={styles.titleText()}>Forget password</Text>
        <Text style={styles.bodyText()}>Enter your email for the verification process. We will send 4 digits code to your email.</Text>
        <View style={styles.formView()}>
          <InputBox
            label='Email'
            value={inputField}
            onChangeText={(txt)=> setInputField(txt)}
            placeholder='Enter your email address'
            error={error?.email}
            icon={error?.email}
            renderIcon={() => (<IcInputError />)}
            keyboardType='email-address'
          />
          <Button 
            title='Send Code'
            onPress={handleBtnPress}
            disabled={disabled}
          />
        </View>
      </View>
    </Screen>
  )
}
