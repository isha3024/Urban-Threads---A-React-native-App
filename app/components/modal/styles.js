import { color, fonts, fontSize, size } from "../../theme";

export const mainView = (statusbarHeight) => ({
  position: 'absolute',
  backgroundColor: color.customTransparent(0.5),
  width: size.deviceWidth,
  height: size.deviceHeight + size.moderateScale(statusbarHeight),
  justifyContent: 'center',
  alignItems: 'center',
})

export const modalView = () => ({
  padding: size.moderateScale(24),
  backgroundColor: color.primary,
  borderRadius: size.moderateScale(20),
  width: size.deviceWidth - size.moderateScale(60),
  alignItems: 'center'
})

export const iconView = () => ({
  width: size.moderateScale(70),
  height: size.moderateScale(70),
  alignItems: 'center',
  justifyContent: 'center'
})

export const modalTitle = () => ({
  color: color.secondary,
  fontSize: fontSize.medium,
  fontFamily: fonts.generalSansSemiBold,
  marginTop: size.moderateScale(10),
})

export const modalBody = () => ({
  textAlign: 'center',
  color: color.bodyGray,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.generalSansRegular,
  marginTop: size.moderateScale(10),
})

export const button = () => ({
  width: '100%',
  marginTop: size.moderateScale(24),
  paddingVertical: size.moderateScale(15),
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.secondary,
  borderRadius: size.moderateScale(10),
})

export const buttonText = () => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.generalSansMedium,
  color: color.primary,
  textTransform: 'uppercase',
  letterSpacing: size.moderateScale(1)
})