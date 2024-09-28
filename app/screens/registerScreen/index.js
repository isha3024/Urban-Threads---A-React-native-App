import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button, InputBox, Screen } from '../../components'
import { IcEye, IcEyeOff, IcFacebook, IcGoogle, IcInputError } from '../../theme'
import * as styles from './styles'
import { EmailValidation } from '../../utils/functions'

export const RegisterScreen = () => {

  const navigation = useNavigation()
  const [togglePassword, setTogglePassword] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [inputFields, setInputFields] = useState({
    fullName: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)

  const setInputFieldsText = (field, value) => {
    setInputFields((prev) => ({ ...prev, [field]: value }));
  }

  const checkDisabledButton = () => {
    if (inputFields.fullName && inputFields.email && inputFields.password) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  }

  const validateInputFields = () => {
    
    let error = {};

    if(inputFields.fullName.length < 2) {
      error.fullName = 'Full name must be at least 2 characters long';
    }
    if(!EmailValidation(inputFields.email)) {
      error.email = 'Invalid email address';
    }
    if(inputFields.password.length < 8 || inputFields.password.length > 12) {
      error.password = 'Password must be between 8 to 12 characters';
    }
    setError(error);
    return Object.keys(error).length === 0
  }

  useEffect(() => {
    checkDisabledButton()
    console.log("Errors: ",error)
  },[inputFields])
 
  return (
    <Screen withScroll translucent={true}>
      <View style={styles.mainScreenView()}>
      <View style={styles.topView()}>
        <Text style={styles.titleText()}>Create an account</Text>
        <Text style={styles.textLight()}>Let's create an account</Text>
      </View>
      <View style={styles.middleView()}>
        <InputBox 
          label='Full name'
          value={inputFields?.fullName}
          onChangeText={(text) => setInputFieldsText('fullName', text)}
          placeholder='Enter your full name'
          keyboardType='default'
          autoCapitalize={true}
          error={error?.fullName}
          icon={error?.fullName}
          renderIcon={() => (<IcInputError />)}
        />
        <InputBox 
          label='Email'
          value={inputFields?.email}
          onChangeText={(text) => setInputFieldsText('email', text)}
          placeholder='Enter your email address'
          keyboardType='email-address'
          autoCapitalize={false}
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
          autoCapitalize={true}
          icon={true}
          renderIcon={() => togglePassword ? (<IcEye />) : (<IcEyeOff />)}
          onIconPress={() => setTogglePassword(prev => !prev)}
          secureTextEntry={togglePassword}
          error={error?.password}
        />
        <View style={styles.textInRow()}>
          <Text style={styles.bodyTextDark()}>By signing up you agree to our </Text>
          <TouchableOpacity><Text style={styles.linkText()}>Terms</Text></TouchableOpacity>
          <Text style={styles.bodyTextDark()}>, </Text>
          <TouchableOpacity><Text style={styles.linkText()}>Privacy Policy</Text></TouchableOpacity>
          <Text style={styles.bodyTextDark()}>, </Text>
          <Text style={styles.bodyTextDark()}>and </Text>
          <TouchableOpacity><Text style={styles.linkText()}>Cookie Use.</Text></TouchableOpacity>
        </View>
        <Button 
          title='Create an Account'
          disabled={disabled}
          onPress={!disabled && validateInputFields}
          customBtnStyles={styles.buttonMain()}
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
          title='Sign Up with Facebook'
          activeOpacity={0.8}
          iconLeft
          renderLeftIcon={() => (<IcFacebook />)}
          customBtnStyles={styles.btnSocialAccountFb()}
        />
      </View>
      <TouchableOpacity style={styles.bottomLinkView()} onPress={() => navigation.navigate('loginScreen')}>
          <Text style={styles.textLight()}>Already have an account?</Text>
          <Text style={styles.linkText()}> Log In</Text>
      </TouchableOpacity>
      </View>
    </Screen>
  )
}
