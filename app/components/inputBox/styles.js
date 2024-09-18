import { color, fonts, fontSize, size } from "../../theme"

export const inputBoxWrapper = () => ({
  width: '100%',
  paddingBottom: size.moderateScale(15),
})

export const inputLabel = () => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.generalSansMedium,
  color: color.secondary,
  textTransform: 'capitalize',
})

export const textInputWrapper = (error, success) => ({
  borderWidth: size.moderateScale(1),
  borderColor: error ? color.error : success ? color.success : color.inputBorder,
  borderRadius: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(15),
  marginTop: size.moderateScale(4)
})

export const textInput = () => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.generalSansRegular,
  color: color.secondary,
  textTransform: 'capitalize',
})

export const renderIconStyle = () => ({
  position: 'absolute',
  right: size.moderateScale(15),
  height: '100%',
  width: size.moderateScale(30),
  justifyContent: 'center',
  alignItems: 'flex-end',
  backgroundColor: color.primary,
})

export const errorsuccesIcon = () => ({
  position: 'absolute',
  right: size.moderateScale(20),
  height: '100%',
  width: size.moderateScale(30),
  justifyContent: 'center',
  alignItems: 'flex-end',
  backgroundColor: color.primary,
})

export const errorText = () => ({
  position: 'absolute',
  bottom: 0,
  fontSize: fontSize.small,
  fontFamily: fonts.generalSansMedium,
  color: color.error,
})