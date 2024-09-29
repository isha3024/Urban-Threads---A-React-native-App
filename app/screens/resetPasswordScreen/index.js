import React, { useEffect, useState } from 'react'
import { View, Text, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button, Header, InputBox, Modal, Screen } from '../../components'
import { IcBackArrow, IcCheckCircle, IcEye, IcEyeOff, IcInputError, size } from '../../theme'
import * as styles from './styles'

export const ResetPasswordScreen = () => {

  const navigation = useNavigation();
  const [disabled, setDisabled] = useState(true)
  const [error, setError] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [inputFields, setInputFields] = useState({
    password: '',
    confirmPassword: ''
  })
  const [togglePassword, setTogglePassword] = useState({
    password: false,
    confirmPassword: false
  })

  const validatePassword = () => {
    let error = {};
    if(!inputFields.password) {
      error.password = 'Password is required'
    }else if(inputFields.password.length < 8 || inputFields.password.length > 12){
      error.password = 'Password must be between 8 and 12 characters'
    }
    if(!inputFields.confirmPassword) {
      error.confirmPassword = 'Confirm Password is required'
    }
    if (inputFields.password !== inputFields.confirmPassword) {
      error.confirmPassword = 'Confirm Password does not match!!'
    }
    setError(error);
    return Object.keys(error).length === 0
  }

  const checkPassword = () => {
    if(!validatePassword()) {
      return
    }
    Keyboard.dismiss()
    setIsModalVisible(true)
  }

  const checkInputFields = () => {
    if(!inputFields.password || !inputFields.confirmPassword) {
      setDisabled(true)
    }
    else {
      setDisabled(false);
    }
  }

  useEffect(() => {
    checkInputFields()
  }, [inputFields])
  

  return (
    <Screen translucent={true}>
      <View style={styles.mainView()}>
      <Header 
          headerLeftIcon
          leftIcon={() => (<IcBackArrow />)}
          leftIconPress={() => navigation.goBack()}
        />
        <Text style={styles.titleText()}>Reset Password</Text>
        <Text style={styles.bodyText()}>Set the new password for your account so you can login and access all the features.</Text>
        <View style={styles.formView()}>
          <InputBox 
            label='Password'
            value={inputFields.password}
            onChangeText={(text) => setInputFields({ ...inputFields, password: text })}
            error={error?.password}
            icon={true}
            renderIcon={() => togglePassword.password ? (<IcEye />) : (<IcEyeOff />)}
            onIconPress={() => setTogglePassword(
              { ...togglePassword, password: !togglePassword.password }
            )}
            secureTextEntry={togglePassword.password}
          />
          <InputBox 
            label='Confirm Password'
            value={inputFields.confirmPassword}
            onChangeText={(text) => setInputFields({ ...inputFields, confirmPassword: text })}
            error={error?.confirmPassword}
            icon={true}
            renderIcon={() => togglePassword.confirmPassword ? (<IcEye />) : (<IcEyeOff />)}
            onIconPress={() => setTogglePassword(
              { ...togglePassword, confirmPassword: !togglePassword.confirmPassword }
            )}
            secureTextEntry={togglePassword.confirmPassword}
          />
        </View>
        <Button 
          title='Continue'
          customBtnStyles={styles.button()}
          disabled={disabled}
          onPress={checkPassword}
        />
      </View>
      {
        isModalVisible 
        ? (
          <Modal 
            icon
            renderIcon={() => (<IcCheckCircle width={size.moderateScale(64)} height={size.moderateScale(64)} />)}
            modalTitle='Password Changed!'
            modalBody='Your can now use your new password to login to your account.'
            firstBtnTitle='Login'
            firstBtnOnPress={() => {
              setIsModalVisible(prev => !prev)
              navigation.navigate('loginScreen')
            }}
          />
        ) 
        : null
      }
    </Screen>
  )
}