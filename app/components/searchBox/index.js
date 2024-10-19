import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import * as styles from './styles'
import { color } from '../../theme'

export const SearchBox = ({
  leftIcon,
  renderLeftIcon,
  placeholder,
  value,
  onChangeText,
  rightIcon,
  renderRightIcon
}) => {
  return (
    <View style={styles.mainView()}>
      {leftIcon && (
        <View style={styles.leftIconView()}>{renderLeftIcon()}</View>
      )}
      <TextInput 
        style={styles.textInput()}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={color.inputPlaceHolderTextColor}
        autoCapitalize='characters'
      />
      {
        rightIcon && (
          <TouchableOpacity style={styles.rightIconView()}>{renderRightIcon()}</TouchableOpacity>
        )
      }
    </View>
  )
}