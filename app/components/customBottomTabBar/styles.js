import { color, fontSize, fonts, size } from "../../theme";

export const mainBottomContainer = () => ({
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: size.moderateScale(60),
  backgroundColor: color.white,
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  width: size.deviceWidth,
  borderTopColor: color.inputBorder,
  borderTopWidth: size.moderateScale(1),
})

export const bottomBarItem = () => ({
  alignItems: 'center',
  gap: size.moderateScale(1)
})

export const screenLabel = (isFocused) => ({
  color: isFocused ? color.secondary : color.inputPlaceHolderTextColor,
  fontSize: fontSize.verySmall,
  fontFamily: fonts.generalSansMedium, 
})

