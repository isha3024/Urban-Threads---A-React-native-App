import { color, fonts, fontSize, size } from "../../theme"

export const mainProductWrapper = () => ({
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const productDetailsWrapper = () => ({
  flex: 1,
  flexDirection: 'row',
  gap: size.moderateScale(12),
})

export const productImageWrapper = () => ({
  width: size.moderateScale(55),
  height: size.moderateScale(55)
})

export const productCardImage = () => ({
  width: '100%',
  height: '100%',
  borderRadius: size.moderateScale(6)
})

export const productDetails = () => ({
  justifyContent: 'center',
  gap: size.moderateScale(3)
})

export const productCardTitle = () => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.generalSansSemiBold,
  color: color.secondary
})

export const productPriceViewMainWrapper = () => ({
  flexDirection: 'row',
})

export const productCardPrice = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.generalSansMedium,
  color: color.bodyGray,
})

export const productCardDiscount = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.generalSansMedium,
  color: color.error,
  paddingLeft: size.moderateScale(5)
})

export const searchLinkIcon = () => ({
  width: size.moderateScale(24),
  height: size.moderateScale(24),
  transform: [{rotate: '-45deg'}]
})