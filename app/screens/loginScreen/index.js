import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button, InputBox, Screen } from '../../components'
import { EmailValidation } from '../../utils'
import { IcEye, IcEyeOff, IcFacebook, IcGoogle } from '../../theme'
import * as styles from './styles'

export const LoginScreen = () => {

  const navigation = useNavigation()
  const [togglePassword, setTogglePassword] = useState(false)
  const [disabled, setDisabled] = useState(true);
  const [inputFields, setInputFields] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)

  const setInputFieldsText = (field, value) => {
    setInputFields((prev) => ({ ...prev, [field]: value }));
  }

  const checkDisabledButton = () => {
    if (inputFields.email && inputFields.password) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  }

  const validateInputFields = () => {
    let error = {};
    if(!EmailValidation(inputFields.email)) {
      error.email = 'Invalid email address';
    }
    if(inputFields.password.length < 8 || inputFields.password.length > 12) {
      error.password = 'Password must be between 8 to 12 characters';
    }
    setError(error);
    return Object.keys(error).length === 0
  }

  const handleFormSubmit = () => {
    if(validateInputFields()) {
      console.log('Form submitted successfully')
    }
    setInputFields({
      email: '',
      password: ''
    })
    ToastAndroid.show('User created successfully!!',ToastAndroid.SHORT)
  }

  useEffect(() => {
    checkDisabledButton()
  },[inputFields])

  return (
    <Screen withScroll translucent={true} scrollStyle={{ flexGrow: 1 }}>
      <View style={styles.mainScreenView()}>
        <View style={styles.topView()}>
          <Text style={styles.titleText()}>Login to you account</Text>
          <Text style={styles.textLight()}>It's great to see you again.</Text>
        </View>
        <View style={styles.middleView()}>
          <InputBox
            value={inputFields?.email}
            onChangeText={(text) => setInputFieldsText('email', text)}
            label='Email'
            placeholder='Enter your email address'
            keyboardType='email-address'
            error={error?.email}
            icon={error?.email}
            renderIcon={() => (<IcInputError />)}
          />
          <InputBox
            label='Password'
            value={inputFields?.password}
            onChangeText={(text) => setInputFieldsText('password', text)}
            placeholder='Enter your password'
            keyboardType='default'
            icon={true}
            error={error?.password}
            renderIcon={() => togglePassword ? (<IcEye />) : (<IcEyeOff />)}
            onIconPress={() => setTogglePassword(prev => !prev)}
            secureTextEntry={togglePassword}
          />
          <TouchableOpacity activeOpacity={0.6} style={styles.textInRow()} onPress={() => navigation.navigate('forgetPasswordScreen')}>
            <Text style={styles.textLight()}>Forget your password?</Text>
            <Text style={styles.linkText()}> Reset Password</Text>
          </TouchableOpacity>
          <Button
            title='Login'
            disabled={disabled}
            customBtnStyles={styles.buttonMain()}
            onPress={() => validateInputFields() && handleFormSubmit()}
          />
        </View>
        <View style={styles.bottomView()}>
          <View style={styles.oRTextView()}>
            <View style={styles.horizontalLine()} />
            <Text style={styles.orText()}>Or</Text>
          </View>
          <Button
            title='Sign Up with Google'
            activeOpacity={0.5}
            btnOutline
            iconLeft
            renderLeftIcon={() => (<IcGoogle />)}
            customBtnStyles={styles.btnSocialAccount()}
          />
          <Button
            title='Sign Up with Google'
            activeOpacity={0.8}
            iconLeft
            renderLeftIcon={() => (<IcFacebook />)}
            customBtnStyles={styles.btnSocialAccountFb()}
          />
        </View>
        <TouchableOpacity activeOpacity={0.6} style={styles.bottomLinkView()} onPress={() => navigation.navigate('registerScreen')}>
          <Text style={styles.textLight()}>Don't have an account?</Text>
          <Text style={styles.linkText()}> Join</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  )
}