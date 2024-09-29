import { color, fonts, fontSize, size } from "../../theme";

export const mainView = () => ({
  paddingHorizontal: size.moderateScale(24),
})

export const emailText = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: size.moderateScale(0),
  marginTop: size.moderateScale(10)
})

export const titleText = () => ({
  color: color.secondary,
  fontSize: fontSize.littleLarge,
  fontFamily: fonts.generalSansSemiBold
})

export const bodyText = () => ({
  color: color.bodyGray,
  fontSize: fontSize.smallMedium,
  fontFamily: fonts.generalSansRegular,
})

export const email = () => ({
  color: color.secondary,
  fontSize: fontSize.smallMedium,
  fontFamily: fonts.generalSansRegular,
  marginTop: size.moderateScale(10)
})

export const otpView = () => ({
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: size.moderateScale(24),
  gap: size.moderateScale(12)
})

export const inputBox = () => ({
  width: size.moderateScale(65),
  height: size.moderateScale(60),
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: color.inputBorder,
  borderRadius: size.moderateScale(8),
  borderWidth: size.moderateScale(1),
  color: color.secondary,
  fontSize: fontSize.littleLarge,
  fontFamily: fonts.generalSansSemiBold,
  paddingHorizontal: size.moderateScale(25)
})

export const resendOTP = () => ({
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: size.moderateScale(16)
})

export const linkText = () => ({
  color: color.secondary,
  fontSize: fontSize.smallMedium,
  fontFamily: fonts.generalSansMedium,
  textDecorationLine: 'underline'
})

export const button = () => ({
  marginTop: size.moderateScale(50)
})
