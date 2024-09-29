import React from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'

import * as styles from './styles'

const statubarHeight = StatusBar.currentHeight;

export const Header = ({
  headerStyle,
  leftIconPress,
  headerLeftIcon,
  leftIcon,
  headerTitleStyle,
  headerTitle,
  rightIconPress,
  headerRightIcon,
  rightIcon
}) => {
  return (
    <View style={[styles.mainContainer(statubarHeight, headerLeftIcon), headerStyle]}>
      {headerLeftIcon
        ? (<TouchableOpacity onPress={leftIconPress} style={styles.leftView()}>{leftIcon()}</TouchableOpacity>)
        : null}
      <View style={styles.centerView(headerLeftIcon)}>{
        headerTitle ? (
          <Text style={[styles.headerTitle(), headerTitleStyle]}>{headerTitle}</Text>
        ) : null
      }</View>
      {headerRightIcon
        ? (<TouchableOpacity onPress={rightIconPress} style={styles.rightView()}>{rightIcon()}</TouchableOpacity>)
        : null}
    </View>
  )
}