import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import * as styles from './styles'
import { Button, InputBox, Screen } from '../../components'
import { IcEye, IcEyeOff, IcFacebook, IcGoogle } from '../../theme'
import { useNavigation } from '@react-navigation/native'

export const RegisterScreen = () => {

  const navigation = useNavigation()
  const [togglePassword, setTogglePassword] = useState(false)

  return (
    <Screen style={styles.mainScreenView()} translucent={true}>
      <View style={styles.topView()}>
        <Text style={styles.titleText()}>Create an account</Text>
        <Text style={styles.textLight()}>Let's create an account</Text>
      </View>
      <View style={styles.middleView()}>
        <InputBox 
          label='Full name'
          placeholder='Enter your full name'
          keyboardType='default'
          autoCapitalize={true}
        />
        <InputBox 
          label='Email'
          placeholder='Enter your email address'
          keyboardType='email-address'
          autoCapitalize={false}
        />
        <InputBox 
          label='Password'
          placeholder='Enter your password'
          keyboardType='default'
          autoCapitalize={true}
          icon={true}
          renderIcon={() => togglePassword ? (<IcEye />) : (<IcEyeOff />)}
          onIconPress={() => setTogglePassword(prev => !prev)}
          secureTextEntry={togglePassword}
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
          disabled={true}
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
          title='Sign Up with Google'
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
    </Screen>
  )
}
