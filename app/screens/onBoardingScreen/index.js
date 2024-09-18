import React, { useEffect, useRef } from 'react'
import { View, Image, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { color, IcArrowRight, images } from '../../theme'
import { Button, Screen } from '../../components'
import * as styles from './styles'

export const OnBoardingScreen = () => {

  const navigation = useNavigation()
  const textOpacity = useRef(new Animated.Value(0)).current;
  const imageScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(imageScale, {
        toValue: 1,
        delay: 100,
        useNativeDriver: true,
      }),
    ]).start()
  },[])


  return (
    <Screen style={styles.mainScreenView()} barStyle='dark-content' translucent={true}>
      <View style={styles.viewContainer()}>
        <Animated.Text style={[styles.h1(), {opacity: textOpacity}]}>Define yourself in your unique way.</Animated.Text>
        <Image source={images.onBoardingImg} style={styles.onBoardingImg()} />
        <Animated.Image source={images.onBoardingImgMan} style={[styles.onBoardingImgMan(), { transform: [{scale: imageScale}]}]} />
      </View>
      <View style={styles.buttonContainer()}>
        <Button 
          onPress={() => navigation.navigate('registerScreen')}
          activeOpacity={0.8}
          title='Get Started'
          iconRight
          renderRightIcon={() => (<IcArrowRight fill={color.primary} />)}
        />
      </View>
    </Screen>
  )
}