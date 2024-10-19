import { color, fonts, fontSize, size } from "../../theme";

export const mainView = () => ({
  flex: 1,
  paddingHorizontal: size.moderateScale(15),
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: size.moderateScale(1),
  borderColor: color.inputBorder,
  borderRadius: size.moderateScale(10)
})

export const leftIconView = () => ({
  width: size.moderateScale(24),
  height: size.moderateScale(24),
  alignItems: 'center',
  justifyContent: 'center'
})

export const textInput = () => ({
  fontSize: fontSize.littleMedium,
  color: color.bodyGray,
  fontFamily: fonts.generalSansRegular,
  flex: 1,
})

export const rightIconView = () => ({
  width: size.moderateScale(24),
  height: size.moderateScale(24),
  alignItems: 'center',
  justifyContent: 'center'
})
