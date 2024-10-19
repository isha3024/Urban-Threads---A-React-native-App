import React, { useEffect, useRef } from 'react'
import { View, Text, StatusBar, Button, TouchableOpacity, Animated, Dimensions } from 'react-native'

import { color } from '../../theme'
import * as styles from './styles'

const statusbarHeight = StatusBar.currentHeight;
const screenHeight = Dimensions.get('window').height;

export const Modal = ({
  icon,
  renderIcon,
  modalTitle,
  modalBody,
  firstBtnTitle,
  secondBtnTitle,
  firstBtnOnPress,
  secondBtnOnPress
}) => {

  const animateModal = useRef(new Animated.Value(screenHeight)).current;

  const handleFirstButtonPress = () => {
    Animated.timing(animateModal, {
      toValue: screenHeight,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (firstBtnOnPress) {
        firstBtnOnPress();
      }
    });
  };

  useEffect(() => {
    Animated.timing(animateModal, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start()
  },[animateModal])


  return (
    <View style={styles.mainView(statusbarHeight)}>
      <StatusBar backgroundColor={color.customTransparent(0)} barStyle='dark-content' translucent={true} />
      <Animated.View style={[
        styles.modalView(),
        {
          transform: [{ translateY: animateModal }]
        }
        ]}>
        {
          icon && (
            <View style={styles.iconView()}>{renderIcon()}</View>
          )
        }
        {
          modalTitle &&
          (<Text style={styles.modalTitle()}>{modalTitle}</Text>)
        }
        {
          modalBody &&
          (<Text style={styles.modalBody()}>{modalBody}</Text>)
        }
        {
          firstBtnTitle && 
          (
            <TouchableOpacity style={styles.button()} onPress={handleFirstButtonPress}>
              <Text style={styles.buttonText()}>{firstBtnTitle}</Text>
            </TouchableOpacity>
          )
        }
        {
          secondBtnTitle && 
          (
            <TouchableOpacity style={styles.button()} onPress={secondBtnOnPress}>
              <Text style={styles.buttonText()}>{secondBtnTitle}</Text>
            </TouchableOpacity>
          )
        }
      </Animated.View>
    </View>
  )
}