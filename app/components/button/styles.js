import { color, fonts, fontSize, size } from "../../theme";

export const buttonWrapper = (disabled, btnOutline) => ({
  width: '100%',
  paddingVertical: size.moderateScale(16),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: size.moderateScale(10),
  backgroundColor: disabled ? color.btnDisableBg : btnOutline ? color.transparent : color.secondary,
  borderWidth: size.moderateScale(1),
  borderColor: disabled ? color.btnDisableBg : btnOutline ? color.secondary : color.secondary,
  borderRadius: size.moderateScale(10)
})

export const btnText = (btnOutline) => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.generalSansMedium,
  color: btnOutline ? color.secondary : color.primary,
  textTransform: 'uppercase',
  letterSpacing: size.moderateScale(1)
})

export const iconView = () => ({
})