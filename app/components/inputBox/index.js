import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import * as styles from './styles'
import { color, IcCheckCircle, IcInputError } from '../../theme'

export const InputBox = ({
  label,
  placeholder,
  icon,
  renderIcon,
  onIconPress,
  multiline,
  keyboardType,
  secureTextEntry,
  maxLength,
  autoCapitalize,
  error,
  errorMessage,
  success
}) => {
  return (
    <View style={styles.inputBoxWrapper()}>
      <Text style={styles.inputLabel()}>{label}</Text>
      <View style={styles.textInputWrapper(error, success)}>
        <TextInput 
          style={styles.textInput()}
          placeholder={placeholder}
          placeholderTextColor={color.inputPlaceHolderTextColor}
          keyboardType={keyboardType}
          multiline={multiline}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          autoCapitalize={autoCapitalize}
        />
        {
          icon && error 
          ? (<View style={styles.errorsuccesIcon()}><IcInputError /></View>) 
          : icon && success 
          ? (<View style={styles.errorsuccesIcon()}><IcCheckCircle /></View>) 
          : icon && renderIcon ? (<TouchableOpacity activeOpacity={0.5} onPress={onIconPress} style={styles.renderIconStyle()}>{renderIcon()}</TouchableOpacity>) 
          : null
        }
      </View>
      {error && <Text style={styles.errorText()}>{`* ${errorMessage}`}</Text>}
    </View>
  )
}