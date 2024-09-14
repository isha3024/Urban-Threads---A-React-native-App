import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import * as styles from './styles'

export const Button = ({
  onPress,
  activeOpacity,
  disabled,
  btnOutline,
  title,
  iconLeft,
  renderLeftIcon,
  iconRight,
  renderRightIcon,
  customBtnStyles,
  customBtnTextStyles
}) => {

  return (
    <TouchableOpacity style={[styles.buttonWrapper(disabled, btnOutline), customBtnStyles]} onPress={onPress} activeOpacity={activeOpacity} disabled={disabled}>
      { iconLeft && renderLeftIcon() }
      <Text style={[styles.btnText(btnOutline), customBtnTextStyles]}>{title}</Text>
      { iconRight && renderRightIcon() }
    </TouchableOpacity>
  )
}
