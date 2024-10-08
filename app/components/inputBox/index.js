import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import * as styles from './styles'
import { color, IcCheckCircle, IcInputError } from '../../theme'

export const InputBox = ({
  inputStyle,
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  renderIcon,
  onIconPress,
  multiline,
  keyboardType,
  secureTextEntry,
  maxLength,
  autoCapitalize,
  error,
  success
}) => {

  return (
    <View style={[inputStyle, styles.inputBoxWrapper()]}>
      {label && (<Text style={styles.inputLabel()}>{label}</Text>)}
      <View style={styles.textInputWrapper(error, success)}>
        <TextInput 
          style={styles.textInput()}
          placeholder={placeholder}
          placeholderTextColor={color.inputPlaceHolderTextColor}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          multiline={multiline}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          autoCapitalize={autoCapitalize ?? 'none'}
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
      {error && <Text style={styles.errorText()}>{`* ${error}`}</Text>}
    </View>
  )
}