import React, { useEffect, useRef } from 'react'
import { View, Image, Animated } from 'react-native'

import * as styles from './styles'
import { Screen } from '../../components'
import { color, IcLogo, images } from '../../theme'

export const SplashScreen = () => {

  const logoScaleAnimation = useRef(new Animated.Value(0)).current;
  const logoOpacityAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(logoScaleAnimation, {
        toValue: 1.5,
        delay: 100,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacityAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ]).start()
  },[])

  return (
    <Screen bgColor={color.secondary} translucent={true}>
      <View style={styles.mainView()}>
        <Image source={images.splashBgImage} style={styles.bgImage()} />
        <Animated.View style={{
          transform: [{ scale: logoScaleAnimation }],
          opacity: logoOpacityAnimation,
        }}>
          <IcLogo />
        </Animated.View>
      </View>
    </Screen>
  )
}
