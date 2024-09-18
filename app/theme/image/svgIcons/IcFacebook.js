import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { size } from '../../Size';

export const Facebook = (props) => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(24)}
      height={props.height ?? size.moderateScale(24)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_2458_165)">
        <Path
          d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z"
          fill="#fff"
        />
        <Path
          d="M16.671 15.469L17.203 12h-3.328V9.75c0-.95.465-1.875 1.956-1.875h1.513V4.922s-1.374-.234-2.687-.234c-2.74 0-4.532 1.66-4.532 4.668V12H7.078v3.469h3.047v8.385a12.087 12.087 0 003.75 0V15.47h2.796z"
          fill="#1877F2"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2458_165">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
