import { color, fonts, fontSize, size } from "../../theme";

export const mainScreenView = () => ({
  flex: 1,
  backgroundColor: color.primary,
})

export const viewContainer = () => ({
  flex: 1,
  backgroundColor: color.primary,
  paddingTop: size.moderateScale(50)
})

export const h1 = () => ({
  fontFamily: fonts.generalSansBold,
  color: color.secondary,
  fontSize: size.moderateScale(60),
  lineHeight: size.moderateScale(48),
  letterSpacing: size.moderateScale(-3),
  width: size.deviceWidth - size.moderateScale(80),
  paddingLeft: size.moderateScale(24),
  paddingTop: size.moderateScale(20),
})

export const onBoardingImg = () => ({
  position: 'absolute',
  top: size.moderateScale(60),
  left: 0,
})

export const onBoardingImgMan = () => ({
  position: 'absolute',
  top: size.moderateScale(60),
  right: 0,
})

export const buttonContainer = () => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: color.primary,
  paddingVertical: size.moderateScale(22),
  paddingHorizontal: size.moderateScale(25),
  borderTopColor: color.inputBorder,
  borderTopWidth: size.moderateScale(1)
})