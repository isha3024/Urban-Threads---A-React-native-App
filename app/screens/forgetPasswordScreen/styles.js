import { color, fonts, fontSize, size } from "../../theme";

export const mainView = () => ({
  paddingHorizontal: size.moderateScale(24)
})

export const header = () => ({
  // paddingHorizontal: size.moderateScale(24)
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
  gap: size.moderateScale(70),
  marginTop: size.moderateScale(25)
})