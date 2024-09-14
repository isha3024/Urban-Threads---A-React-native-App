import {color, size} from '../../theme';

export const mainView = () => ({
  flex: 1,
  backgroundColor: color.white,
});
export const btnContainer = () => ({
  paddingHorizontal: size.moderateScale(20),
});
export const inputsContainer = () => ({
  padding: size.moderateScale(20),
});
export const inputBoxStyle = focused => ({
  borderColor: !focused ? color.customBlack(0.3) : color.primary,
});
