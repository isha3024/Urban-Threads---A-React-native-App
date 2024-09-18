import { color } from '../../theme';
export const full = () => ({
  flexGrow: 1,
  backgroundColor: color.bodyGray
});
export const mainContainer = (secondary, height) => ({
  flex: 1,
  backgroundColor: secondary ? secondary : color.white,
  marginTop: height
});

export const container = (secondary, height) => ({
  flex: 1,
  marginTop: height,
  backgroundColor: secondary ? secondary : color.white,
  overflow: 'hidden',
})

export const withoutScrollView = (style) => [
  style,
];
