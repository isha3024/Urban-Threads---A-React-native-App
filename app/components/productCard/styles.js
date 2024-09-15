import { color, fonts, fontSize, size } from "../../theme"

export const mainProductWrapper = () => ({
  alignItems: 'flex-start',
  gap: size.moderateScale(8)
})

export const productCardWrapper = () => ({
  alignItems: 'flex-start',
  gap: size.moderateScale(8)
})

export const productCardImageWrapper = () => ({
  overflow: 'hidden',
  borderRadius: size.moderateScale(10),
})

export const productCardImage = () => ({
})

export const productCardDetails = () => ({
  gap: size.moderateScale(3),
  paddingHorizontal: size.moderateScale(2)
})

export const productCardTitle = () => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.generalSansSemiBold,
  color: color.secondary,
})

export const productPriceView = () => ({
  flexDirection: 'row',
})

export const productCardPrice = () => ({
  fontSize: fontSize.verySmall,
  fontFamily: fonts.generalSansMedium,
  color: color.bodyGray,
})

export const productCardDiscount = () => ({
  fontSize: fontSize.verySmall,
  fontFamily: fonts.generalSansMedium,
  color: color.error,
  paddingLeft: size.moderateScale(5)
})

export const floatingButton = () => ({
  position: 'absolute',
  top: size.moderateScale(12),
  right: size.moderateScale(12),
  backgroundColor: color.primary,
  width: size.moderateScale(34),
  height: size.moderateScale(34),
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: size.moderateScale(8),
  elevation: size.moderateScale(8)
})