import { color, size } from "../../theme";

export const mainView = () => ({
  flex: 1,
  backgroundColor: color.secondary,
  alignItems: 'center',
  justifyContent: 'center'
})

export const bgImage = () => ({
  flex: 1,
  position: 'absolute',
  width: size.deviceWidth,
  height: size.deviceHeight - 100,
  top: size.moderateScale(-30)
})