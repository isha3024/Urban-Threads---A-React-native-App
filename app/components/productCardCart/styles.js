import { color, fonts, fontSize, size } from "../../theme";

export const mainProductCardWrapper = () => ({
  padding: size.moderateScale(14),
  backgroundColor: color.primary,
  borderWidth: size.moderateScale(1),
  borderColor: color.inputBorder,
  borderRadius: size.moderateScale(10),
  width: '100%'
})

export const productCardWrapper = () => ({
  flexDirection: 'row',
  gap: size.moderateScale(16),
  width: '100%',
})

export const productCardImageWrapper = () => ({
  width: size.moderateScale(85),
  height: size.moderateScale(80),
})

export const productCardImage = () => ({
  width: '100%',
  height: '100%',
  borderRadius: size.moderateScale(10),
})

export const productCardDetails = () => ({
  justifyContent: 'space-between',
  width: '100%'
})

export const productDetailsWrapper = () => ({
  
})

export const productCardTitle = () => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.generalSansSemiBold,
  color: color.secondary
})

export const productCardSize = () => ({
  fontSize: fontSize.verySmall,
  fontFamily: fonts.generalSansRegular,
  color: color.bodyGray
})

export const productPriceViewMainWrapper = () => ({
  flexDirection: 'row',
  width: '100%'
})

export const productCardPrice = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.generalSansSemiBold,
  color: color.secondary,
})

export const priceAndQuantityWrapper = () => ({
  flexDirection: 'row',
})

export const productCardDiscount = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.generalSansMedium,
  color: color.error,
  paddingLeft: size.moderateScale(5)
})

export const quantityCounter = () => ({
  flexDirection: 'row',
  gap: size.moderateScale(10),
  alignItems: 'center',
  position: 'absolute',
  right: size.moderateScale(14),
  bottom: size.moderateScale(14)
})

export const quanitityUpdater = () => ({
  width: size.moderateScale(22),
  height: size.moderateScale(22),
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: size.moderateScale(3),
  borderColor: color.inputBorder,
  borderWidth: size.moderateScale(1),
})

export const quanitityUpdaterText = () => ({
  fontSize: fontSize.verySmall,
  fontFamily: fonts.generalSansMedium,
  color: color.secondary,
})

export const floatingButton = () => ({
  position: 'absolute',
  top: size.moderateScale(14),
  right: size.moderateScale(14)
})