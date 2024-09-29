import { color, fonts, fontSize, size } from "../../theme";

export const mainView = () => ({
  paddingHorizontal: size.moderateScale(24)
})

export const titleText = () => ({
  color: color.secondary,
  fontSize: fontSize.littleLarge,
  fontFamily: fonts.generalSansSemiBold
})

export const bodyText = () => ({
  color: color.bodyGray,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.generalSansRegular,
  marginTop: size.moderateScale(10)
})

export const formView = () => ({
  marginTop: size.moderateScale(24),
  gap: size.moderateScale(5)
})

export const button = () => ({
  marginTop: size.moderateScale(60),
})