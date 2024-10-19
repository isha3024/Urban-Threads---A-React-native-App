import { color, fonts, fontSize, size } from "../../theme";

export const mainView = () => ({
  flex: 1,
  paddingHorizontal: size.moderateScale(24)
})

export const headerText = () => ({
  fontSize: fontSize.littleLarge,
  color: color.secondary,
  fontFamily: fonts.generalSansSemiBold
})

export const searchView = () => ({
  flexDirection: 'row',
  alignItem: 'center',
  gap: size.moderateScale(8)
})

export const iconView = () => ({
  alignItems: 'center',
  justifyContent: 'center',
  width: size.moderateScale(52),
  height: size.moderateScale(52),
  backgroundColor: color.secondary,
  borderRadius: size.moderateScale(10),
  borderWidth: size.moderateScale(1),
})

export const categoryView = () => ({
  marginVertical: size.moderateScale(16),
})

export const scrollView = () => ({
  
})

export const categoryBtn = (active) => ({
  paddingHorizontal: size.moderateScale(20),
  paddingVertical: size.moderateScale(7),
  borderWidth: size.moderateScale(1),
  borderColor: color.inputBorder,
  borderRadius: size.moderateScale(10),
  backgroundColor: active ? color.secondary : color.primary,
})

export const categoryText = (active) => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.generalSansMedium,
  color: active ? color.primary : color.secondary,
})