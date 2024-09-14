import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import {size} from '../../Size';
import { color } from '../../Colors';

export const ArrowRight = (props) => {
  return (
    <Svg
      width={props.width ?? size.moderateScale(25)}
      height={props.height ?? size.moderateScale(25)}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.5 12h14m0 0l-7-7m7 7l-7 7"
        stroke={props.stroke ?? color.primary}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
