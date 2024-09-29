import { color, fonts, fontSize, size } from "../../theme";

export const mainScreenView = () => ({
  flex: 1,
  backgroundColor: color.primary,
  marginVertical: size.moderateScale(12),
  paddingHorizontal: size.moderateScale(24),
})

export const topView = () => ({
  marginTop: size.moderateScale(20)
})

export const titleText = () => ({
  color: color.secondary,
  fontSize: fontSize.littleLarge,
  fontFamily: fonts.generalSansSemiBold
})

export const textLight = () => ({
  color: color.bodyGray,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.generalSansRegular
})

export const textInRow = () => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: size.moderateScale(10)
})

export const bodyTextDark = () => ({
  color: color.secondary,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.generalSansRegular
})

export const linkText = () => ({
  color: color.secondary,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.generalSansMedium,
  textDecorationLine: 'underline',
})

export const buttonMain = () => ({
  marginTop: size.moderateScale(24)
})

export const middleView = () => ({
  marginTop: size.moderateScale(24)
})

export const bottomView = () => ({
  marginTop: size.moderateScale(24)
})

export const horizontalLine = () => ({
  position: 'absolute',
  width: '100%',
  height: size.moderateScale(1),
  backgroundColor: color.inputBorder
})

export const oRTextView = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: size.moderateScale(8)
})

export const orText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.generalSansRegular,
  color: color.bodyGray,
  paddingHorizontal: size.moderateScale(10),
  backgroundColor: color.primary
})

export const btnSocialAccount = () => ({
  marginTop: size.moderateScale(16)
})

export const btnSocialAccountFb = () => ({
  marginTop: size.moderateScale(16),
  backgroundColor: '#1877F2',
  borderColor: '#1877F2',
})

export const bottomLinkView = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 'auto',
})