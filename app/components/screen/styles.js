import { color } from '../../theme';

export const mainContainer = (bgColor) => ({
  flex: 1,
  backgroundColor: bgColor ?? color.white,
});

export const full = () => ({
  flex: 1,
  backgroundColor: color.primary
});

export const container = (bgColor, height) => ({
  flex: 1,
  marginTop: height,
  backgroundColor: bgColor ?? color.white,
  overflow: 'hidden',
})

export const scrollContainer = () => ({
  flexGrow: 1
})

export const withoutScrollView = (style) => [
  style,
];
