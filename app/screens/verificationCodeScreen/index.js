import React, { useRef, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { IcBackArrow } from '../../theme'
import { Button, Header, Screen } from '../../components'
import * as styles from './styles'
import { useNavigation } from '@react-navigation/native'

export const VerificationCodeScreen = ({route}) => {

  const navigation = useNavigation();
  const { email }  = route?.params;

  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const [otp, setOtp] = useState(['', '', '', '']);
  const [disabled, setDisabled] = useState(true)

  const handleTextChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    const allFilled = newOtp.every((digit) => digit !== '');
    setDisabled(!allFilled);

    if(text && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  }

  const handleBackspace = (text, index) => {
    if (!text && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const validateOTP = () => {
    const otpValue = otp.join('');
    console.log("otpArray: ",otpValue);
    if(otpValue.length === 4) {
      navigation.navigate('resetPasswordScreen');
    }
  }

  return (
    <Screen translucent={true}>
      <View style={styles.mainView()}>
        <Header 
          headerLeftIcon
          leftIcon={() => (<IcBackArrow />)}
          leftIconPress={() => navigation.goBack()}
        />
        <Text style={styles.titleText()}>Enter 4 Digit Code</Text>
        <View style={styles.emailText()}>
          <Text style={styles.bodyText()}>Enter 4 digit code that you receive on your email</Text>
          <Text style={styles.email()}>( {email} )</Text>
        </View>
        <View style={styles.otpView()}>
          {
            otp.map((digit, index) => {
              return (
                <TextInput 
                  key={index}
                  style={styles.inputBox()} 
                  ref={inputRefs[index]}
                  value={digit}
                  onChangeText={(text) => handleTextChange(text, index)}
                  onKeyPress={(e) => {
                    if(e.nativeEvent.key === 'Backspace'){
                      handleBackspace(otp[index], index)
                    }
                  }}
                  maxLength={1}
                  keyboardType='numeric'
                  returnKeyType='next'
                  onSubmitEditing={() => {
                    if (index < inputRefs.length - 1) {
                      inputRefs[index + 1].current.focus();
                    }
                  }}
                />
              )
            })
          }
        </View>
        <TouchableOpacity style={styles.resendOTP()}>
          <Text style={styles.bodyText()}>Email not received? </Text>
          <Text style={styles.linkText()}>Resend Code</Text>
        </TouchableOpacity>
        <Button 
          title='Continue'
          customBtnStyles={styles.button()}
          onPress={validateOTP}
          disabled={disabled}
        />
      </View>
    </Screen>
  )
}
