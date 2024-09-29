import { color, fontSize, fonts, size } from "../../theme"

export const mainContainer = (statusBarheight) => ({
  flexDirection: 'row',
  marginTop: size.moderateScale(statusBarheight),
  height: size.moderateScale(50),
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: color.primary,
})

export const headerTitle = () => ({
  fontSize: fontSize.middleSmallMedium,
  color: color.secondary,
  fontFamily: fonts.generalSansSemiBold
})

export const headerMain = () => ({
  textAlign: 'center'
})

export const leftView = () => ({
  width: size.moderateScale(24),
  height: size.moderateScale(24),
  justifyContent: 'center',
  alignItems: 'flex-start',
})

export const rightView = () => ({
  width: size.moderateScale(24),
  height: size.moderateScale(24),
  justifyContent: 'center',
  alignItems: 'center',
})

export const centerView = (headerLeftIcon) => ({
  flex: 1,
  alignItems: headerLeftIcon ? 'center' : 'flex-start',
})
