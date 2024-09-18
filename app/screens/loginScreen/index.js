import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import * as styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Button, InputBox, Screen } from '../../components'
import { IcEye, IcEyeOff, IcFacebook, IcGoogle } from '../../theme'

export const LoginScreen = () => {

  const navigation = useNavigation()
  const [togglePassword, setTogglePassword] = useState(false)

  return (
    <Screen style={styles.mainScreenView()} translucent={true}>
      <View style={styles.topView()}>
        <Text style={styles.titleText()}>Login to you account</Text>
        <Text style={styles.textLight()}>It's great to see you again.</Text>
      </View>
      <View style={styles.middleView()}>
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
        <TouchableOpacity style={styles.textInRow()} onPress={() => navigation.navigate('forgetPasswordScreen')}>
          <Text style={styles.textLight()}>Forget your password?</Text>
          <Text style={styles.linkText()}> Reset Password</Text>
        </TouchableOpacity>
        <Button 
          title='Login'
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
      <TouchableOpacity style={styles.bottomLinkView()} onPress={() => navigation.navigate('registerScreen')}>
          <Text style={styles.textLight()}>Don't have an account?</Text>
          <Text style={styles.linkText()}> Join</Text>
        </TouchableOpacity>
    </Screen>
  )
}